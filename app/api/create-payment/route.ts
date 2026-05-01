import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/yookassa';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, orderId, returnUrl, email } = body;

    // Проверяем обязательные поля
    if (!amount || !description || !orderId || ! returnUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, description, orderId, returnUrl' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required for receipt' },
        { status: 400 }
      );
    }

    // Формируем чек (фискальный) — минимальные данные для ЮKassa
    const receipt = {
      customer: { email },
      items: [
        {
          description: description,
          quantity: '1.00',
          amount: { value: amount.toFixed(2), currency: 'RUB' },
          vat_code: '1', // НДС по ставке 20% (можно изменить при необходимости)
          payment_mode: 'full_payment',
          payment_subject: 'service',
        },
      ],
    };

    const payment = await createPayment({
      amount,
      description,
      returnUrl,
      orderId,
      receipt, // передаём чек
    });

    return NextResponse.json({
      paymentId: payment.id,
      confirmationUrl: payment.confirmation.confirmation_url,
    });
  } catch (error: any) {
    console.error('Create payment error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment' },
      { status: 500 }
    );
  }
}
