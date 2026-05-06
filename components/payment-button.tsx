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

// Функция для динамической загрузки скрипта YooKassa
function loadYooKassaWidgetScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      return reject(new Error('Not in browser environment'));
    }

    // Если виджет уже загружен, сразу резолвим
    if ((window as any).YooKassaCheckoutWidget) {
      resolve();
      return;
    }

    // Создаём и добавляем скрипт
    const script = document.createElement('script');
    script.src = 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js';
    script.async = true;

    script.onload = () => {
      // Небольшая задержка на случай, если глобальная переменная ещё не установлена
      setTimeout(() => resolve(), 100);
    };

    script.onerror = () => {
      reject(new Error('Failed to load YooKassa widget script'));
    };

    document.head.appendChild(script);
  });
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

      // Динамически загружаем скрипт виджета перед инициализацией
      await loadYooKassaWidgetScript();

      // Инициализируем виджет YooKassa после загрузки скрипта
      const widget = new (window as any).YooKassaCheckoutWidget({
        confirmation_token: confirmation_token,
        return_url: `${window.location.origin}/payment/success?paymentId=${paymentId}`,
        error_callback: (error: any) => {
          console.error('[PaymentButton] Widget error:', error);
          alert('Ошибка при выполнении платежа. Попробуйте позже.');
        },
      });

      checkoutWidgetRef.current = widget;
      widget.render('checkout');
      setIsLoading(false);
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
