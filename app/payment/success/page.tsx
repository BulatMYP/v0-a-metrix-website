import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Платёж успешно проведён',
  description: 'Спасибо за ваш платёж. Ваш доступ к курсу активирован.',
};

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { paymentId?: string };
}) {
  const paymentId = searchParams.paymentId || 'unknown';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Платёж успешно проведён!
        </h1>

        <p className="text-lg text-muted-foreground mb-2">
          Спасибо за ваш платёж.
        </p>

        <p className="text-sm text-muted-foreground mb-8">
          Ваш доступ к курсу будет активирован в течение нескольких минут.
        </p>

        {paymentId !== 'unknown' && (
          <div className="bg-muted p-4 rounded-lg mb-8">
            <p className="text-xs text-muted-foreground mb-1">ID платежа:</p>
            <p className="text-sm font-mono text-foreground break-all">{paymentId}</p>
          </div>
        )}

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/">Вернуться на главную</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/#courses">Посмотреть другие курсы</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Если у вас есть вопросы, свяжитесь с нашей службой поддержки.
        </p>
      </div>
    </div>
  );
}
