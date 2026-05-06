import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Платёж отклонён',
  description: 'К сожалению, платёж не был проведён.',
};

export default function PaymentFailPage({
  searchParams,
}: {
  searchParams: { reason?: string; paymentId?: string };
}) {
  const reason = searchParams.reason || 'Неизвестная ошибка';
  const paymentId = searchParams.paymentId;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-100 p-6">
            <AlertCircle className="h-16 w-16 text-red-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Платёж отклонён
        </h1>

        <p className="text-lg text-muted-foreground mb-6">
          К сожалению, ваш платёж не был проведён.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <p className="text-sm text-muted-foreground mb-2">Причина:</p>
          <p className="text-sm font-medium text-foreground">{reason}</p>
        </div>

        {paymentId && (
          <div className="bg-muted p-4 rounded-lg mb-8">
            <p className="text-xs text-muted-foreground mb-1">ID платежа:</p>
            <p className="text-sm font-mono text-foreground break-all">{paymentId}</p>
          </div>
        )}

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/#courses">Попробовать снова</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Если проблема сохраняется, пожалуйста, свяжитесь с нашей службой поддержки.
        </p>
      </div>
    </div>
  );
}
