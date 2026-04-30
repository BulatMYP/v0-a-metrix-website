// src/lib/yookassa.ts
import crypto from 'crypto';

export const shopId = process.env.YOOKASSA_SHOP_ID;
export const secretKey = process.env.YOOKASSA_SECRET_KEY;

/**
 * Проверка подписи webhook-уведомления от ЮKassa.
 */
export const verifyWebhookNotification = (event: any, headers: Headers): boolean => {
  if (!secretKey) return false;
  const signatureHeader = headers.get('X-Notification-Signature') || '';
  const hash = crypto.createHash('md5').update(JSON.stringify(event)).update(secretKey).digest('hex');
  return hash === signatureHeader;
};

/**
 * Заголовки для API-запросов к ЮKassa (с идемпотентным ключом).
 */
export const getAuthHeaders = () => ({
  'Idempotence-Key': crypto.randomUUID(),
  'Content-Type': 'application/json',
});
После создания файла сохраните его.

Шаг 3.3. Создание API-эндпоинта /api/payment

Создайте файл src/app/api/payment/route.ts. Скопируйте следующий код:

ts
// src/app/api/payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { shopId, secretKey, getAuthHeaders, verifyWebhookNotification } from '@/lib/yookassa';

// POST – создание платежа (вызывается с фронтенда)
export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    if (!shopId || !secretKey) {
      console.error('Не настроены shopId или секретный ключ');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const returnUrl = process.env.NEXT_PUBLIC_YOOKASSA_RETURN_URL;
    if (!returnUrl) {
      return NextResponse.json({ error: 'Return URL not configured' }, { status: 500 });
    }

    const paymentData = {
      amount: { value: amount.toFixed(2), currency: 'RUB' },
      capture: true,
      confirmation: { type: 'redirect', return_url: returnUrl },
      description: description || 'Оплата курса Флагман/Tech',
    };

    const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64');
    const response = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        ...getAuthHeaders(),
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.description);

    // Возвращаем ссылку для перенаправления пользователя на платёжную страницу
    return NextResponse.json({ confirmationUrl: data.confirmation.confirmation_url });
  } catch (error) {
    console.error('Ошибка создания платежа:', error);
    return NextResponse.json({ error: 'Payment creation failed' }, { status: 500 });
  }
}

// PUT – получение webhook-уведомлений от ЮKassa
export async function PUT(request: NextRequest) {
  try {
    const event = await request.json();
    if (!verifyWebhookNotification(event, request.headers)) {
      console.warn('Невалидная подпись уведомления');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const { object } = event;
    if (object?.status === 'succeeded') {
      console.log(`✅ Платеж ${object.id} на сумму ${object.amount.value} ${object.amount.currency} успешен`);
      // Здесь вы можете добавить логику: обновить статус в базе данных, отправить письмо и т.д.
    } else if (object?.status === 'canceled') {
      console.log(`❌ Платеж ${object.id} отменен`);
    } else {
      console.log(`ℹ️ Необработанный статус ${object?.status} для платежа ${object?.id}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка обработки webhook:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
