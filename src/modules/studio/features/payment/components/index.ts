import dynamic from 'next/dynamic';
import { PaymentProps } from './PaymentContainer';

export const Payment = dynamic<PaymentProps>(() =>
  import('./PaymentContainer').then(m => m.PaymentContainer)
);
