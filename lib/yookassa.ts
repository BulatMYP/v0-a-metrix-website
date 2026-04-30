// lib/yookassa.ts

// Чтение переменных окружения
export const shopId = process.env.YOOKASSA_SHOP_ID;
export const secretKey = process.env.YOOKASSA_SECRET_KEY;

if (!shopId || !secretKey) {
  throw new Error('Missing YooKassa credentials in .env.local');
}

// Базовый URL API ЮKassa
const YOOKASSA_API_URL = 'https://api.yookassa.ru/v3';

// Авторизация: BasicAuth
export function getAuthHeaders(): HeadersInit {
  const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64');
  return {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json',
  };
}

// Генерация idempotence key
export function generateIdempotenceKey(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Создание платежа
export async function createPayment({
  amount,
  currency = 'RUB',
  description,
  returnUrl,
  orderId,
}: {
  amount: number;
  currency?: string;
  description: string;
  returnUrl: string;
  orderId: string;
}) {
  const idempotenceKey = generateIdempotenceKey();

  const payload = {
    amount: {
      value: amount.toFixed(2),
      currency,
    },
    payment_method_data: {
      type: 'bank_card',
    },
    confirmation: {
      type: 'redirect',
      return_url: returnUrl,
    },
    description,
    metadata: {
      orderId,
    },
  };

  const response = await fetch(`${YOOKASSA_API_URL}/payments`, {
    method: 'POST',
    headers: {
      ...getAuthHeaders(),
      'Idempotence-Key': idempotenceKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('YooKassa payment creation error:', errorText);
    throw new Error('Payment creation failed');
  }

  return response.json();
}

// Получение информации о платеже
export async function getPayment(paymentId: string) {
  const response = await fetch(`${YOOKASSA_API_URL}/payments/${paymentId}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('YooKassa get payment error:', errorText);
    throw new Error('Failed to fetch payment');
  }

  return response.json();
}

// Верификация уведомления от ЮKassa (для webhook)
export async function verifyWebhookNotification(requestBody: any, requestHeaders: Headers): Promise<boolean> {
  // Здесь позже добавим проверку подписи (если используется)
  // Пока просто возвращаем true
  return true;
}
