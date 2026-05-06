import { Suspense } from 'react';
import PaymentResultContent from './PaymentResultContent';

export default function PaymentResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-background">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Загрузка...</p>
          </div>
        </div>
      }
    >
      <PaymentResultContent />
    </Suspense>
  );
}
