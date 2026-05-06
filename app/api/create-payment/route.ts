import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    if (!amount || !description) {
      return NextResponse.json(
        { error: 'Missing required fields: amount and description' },
        { status: 400 }
      );
    }

    const shopId = process.env.YOKASSA_SHOP_ID;
    const secretKey = process.env.YOKASSA_SECRET_KEY;

    if (!shopId || !secretKey) {
      console.error('[YooKassa] Missing environment variables');
      return NextResponse.json(
        { error: 'Payment service configuration error' },
        { status: 500 }
      );
    }

    // Prepare Basic Auth header
    const credentials = Buffer.from(`${shopId}:${secretKey}`).toString('base64');

    // Prepare Idempotence-Key for request deduplication
    const idempotenceKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    // Prepare payment data
    const paymentData = {
      amount: {
        value: String(amount),
        currency: 'RUB',
      },
      payment_method_data: {
        type: 'bank_card',
      },
      confirmation: {
        type: 'embedded',
      },
      description: description,
      capture: true,
    };

    console.log('[YooKassa] Creating payment with data:', paymentData);

    // Send request to YooKassa API
    const response = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'Idempotence-Key': idempotenceKey,
      },
      body: JSON.stringify(paymentData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('[YooKassa] API Error:', responseData);
      return NextResponse.json(
        { error: 'Failed to create payment', details: responseData },
        { status: response.status }
      );
    }

    console.log('[YooKassa] Payment created successfully:', responseData.id);

    return NextResponse.json({
      id: responseData.id,
      confirmation_token: responseData.confirmation.token,
    });
  } catch (error) {
    console.error('[YooKassa] Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
