import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/yookassa';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, orderId, returnUrl, email } = body;

    if (!amount || !description || ! orderId || !returnUrl || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, description, orderId, returnUrl, email' },
        { status: 400 }
      );
    }

    const payment = await createPayment({
      amount,
      description,
      returnUrl,
      orderId,
      email,
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
