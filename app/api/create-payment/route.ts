import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/yookassa';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, orderId, courseName, returnUrl } = body;

    if (!amount || !description || !orderId || !returnUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, description, orderId, returnUrl' },
        { status: 400 }
      );
    }

    const payment = await createPayment({
      amount,
      description,
      returnUrl,
      orderId,
    });

    // Возвращаем confirmation URL (для редиректа) и id платежа
    return NextResponse.json({
      paymentId: payment.id,
      confirmationUrl: payment.confirmation.confirmation_url,
    });
  } catch (error) {
    console.error('Create payment error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
