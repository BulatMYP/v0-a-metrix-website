import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/yookassa';

// Временный GET-метод для проверки доступности API
export async function GET() {
  return NextResponse.json({ message: 'API is alive' });
}

// Обработка preflight-запросов (CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, orderId, returnUrl } = body;

    if (!amount || !description || !orderId || !returnUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, description, orderId, returnUrl' },
        { status: 400 }
      );
    }

    console.log('Creating payment with:', { amount, description, orderId, returnUrl });

    const payment = await createPayment({
      amount,
      description,
      returnUrl,
      orderId,
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
