export async function initiatePayment({
  amount,
  description,
  orderId,
}: {
  amount: number;
  description: string;
  orderId: string;
}) {
  const returnUrl = `${window.location.origin}/payment/success`;
  try {
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        description,
        orderId,
        returnUrl,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Payment creation failed');
    }
    const data = await response.json();
    // Перенаправляем пользователя на платёжную страницу ЮKassa
    window.location.href = data.confirmationUrl;
  } catch (error) {
    console.error('Payment initiation error:', error);
    alert('Не удалось начать оплату.. Попробуйте еще раз!');
  }
}
