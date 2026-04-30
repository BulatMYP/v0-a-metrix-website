// Базовый URL API ЮKassa
const YOOKASSA_API_URL = 'https://api.yookassa.ru/v3';
// Ваши ключи из .env.local
const SHOP_ID = process.env.YOOKASSA_SHOP_ID;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY;

if (!SHOP_ID || !SECRET_KEY) {
  throw new Error('Missing YooKassa credentials in .env.local');
}

// Авторизация: BasicAuth с shopId и secretKey
const auth = Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64');

// Утилита для генерации idempotence key (уникальный ключ для каждого запроса)
export function generateIdempotenceKey(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Функция создания платежа
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

  try {
    const response = await axios.post(`${YOOKASSA_API_URL}/payments`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': idempotenceKey,
        'Authorization': `Basic ${auth}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('YooKassa payment creation error:', error.response?.data || error.message);
    throw new Error('Payment creation failed');
  }
}

// Функция получения информации о платеже
export async function getPayment(paymentId: string) {
  try {
    const response = await axios.get(`${YOOKASSA_API_URL}/payments/${paymentId}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('YooKassa get payment error:', error.response?.data || error.message);
    throw new Error('Failed to fetch payment');
  }
}
