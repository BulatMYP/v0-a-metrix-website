'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
  description: string;
  buttonText: string;
  variant?: 'default' | 'outline';
}

declare global {
  interface Window {
    YooKassaCheckoutWidget: any;
  }
}

export function PaymentButton({
  amount,
  description,
  buttonText,
  variant = 'default',
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const checkoutWidgetRef = useRef<any>(null);

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

      const { confirmation_token, id: paymentId } = await response.json();

      console.log('[PaymentButton] Payment created:', paymentId);

      // Initialize YooKassa Checkout Widget
      if (window.YooKassaCheckoutWidget) {
        checkoutWidgetRef.current = new window.YooKassaCheckoutWidget({
          confirmation_token: confirmation_token,
          return_url: `${window.location.origin}/payment/success?paymentId=${paymentId}`,
        });

        checkoutWidgetRef.current.render('checkout');
        setIsLoading(false);
      } else {
        console.error('[PaymentButton] YooKassaCheckoutWidget not found');
        alert('Виджет платежей не загружен. Попробуйте позже.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('[PaymentButton] Error:', error);
      alert('Произошла ошибка. Попробуйте позже.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full"
        variant={variant}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? 'Загрузка...' : buttonText}
      </Button>
      <div id="checkout" />
    </>
  );
}
