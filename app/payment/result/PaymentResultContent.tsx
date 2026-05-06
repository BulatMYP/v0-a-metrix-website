'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentResultContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const paymentId = searchParams.get('paymentId');
  const orderId = searchParams.get('orderId');

  // YooKassa sends ?canceled parameter when user cancels payment
  const isPaymentCanceled = status === 'canceled' || searchParams.has('canceled');

  useEffect(() => {
    // Автоматический редирект через 5 секунд на случай если пользователь не нажмёт кнопку
    if (!isPaymentCanceled) {
      const timer = setTimeout(() => {
        window.location.href = '/#courses';
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isPaymentCanceled]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-background">
      <div className="w-full max-w-md">
        {isPaymentCanceled ? (
          <Card className="border-destructive">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-destructive">Оплата отменена</CardTitle>
              <CardDescription className="mt-2 text-base">
                Вы отменили оплату. Вы можете вернуться и попробовать снова.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentId && (
                <div className="text-sm text-muted-foreground">
                  <p>ID платежа: <span className="font-mono text-xs">{paymentId}</span></p>
                </div>
              )}
              <Button asChild className="w-full">
                <Link href="/#courses">Вернуться к выбору курса</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Платёж выполнен</CardTitle>
              <CardDescription className="mt-2 text-base">
                Спасибо за вашу покупку! Доступ к курсу будет активирован в течение нескольких минут.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentId && (
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>ID платежа: <span className="font-mono text-xs">{paymentId}</span></p>
                </div>
              )}
              {orderId && (
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>ID заказа: <span className="font-mono text-xs">{orderId}</span></p>
                </div>
              )}
              <div className="bg-muted p-3 rounded-md text-sm text-muted-foreground">
                <p>Проверьте вашу электронную почту для получения деталей доступа к курсу и инструкций по входу.</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/">Вернуться на главную</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
