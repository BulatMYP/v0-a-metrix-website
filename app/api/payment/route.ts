// app/api/payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/yookassa';

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из тела запроса
    const body = await request.json();
    const { amount, description, orderId, returnUrl } = body;

    // Валидация обязательных полей
    if (!amount || !description || !orderId || !returnUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, description, orderId, returnUrl' },
        { status: 400 }
      );
    }

    // Создаём платеж в ЮKassa
    const payment = await createPayment({
      amount: Number(amount),
      description,
      returnUrl,
      orderId,
    });

    // Возвращаем confirmation URL (куда редиректить пользователя)
    return NextResponse.json({
      paymentId: payment.id,
      confirmationUrl: payment.confirmation.confirmation_url,
      status: payment.status,
    });
  } catch (error: any) {
    console.error('Payment API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
