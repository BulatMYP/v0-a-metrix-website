'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
  description: string;
  buttonText: string;
  variant?: 'default' | 'outline';
}

export function PaymentButton({
  amount,
  description,
  buttonText,
  variant = 'default',
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      // Call API to create payment
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('[PaymentButton] API Error:', error);
        alert('Ошибка при создании платежа. Попробуйте позже.');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log('[PaymentButton] Payment created:', data.id);

      // Перенаправляем пользователя на платежную форму YooKassa
      if (data.confirmation_url) {
        window.location.href = data.confirmation_url;
      } else {
        console.error('[PaymentButton] No confirmation_url in response:', data);
        alert('Ошибка: не получена ссылка на платёж. Попробуйте позже.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('[PaymentButton] Error:', error);
      alert('Произошла ошибка. Попробуйте позже.');
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading}
      className="w-full"
      variant={variant}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? 'Загрузка...' : buttonText}
    </Button>
  );
}
