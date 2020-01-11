import dynamic from 'next/dynamic';
import { FormProps as FormComponentProps } from 'react-final-form';

export * from './TextField';
export * from './PasswordField';

export type FormProps = FormComponentProps;

export const Form = dynamic<FormProps>(() =>
  import('./Form').then(m => m.Form)
);

export const getForm = <V extends {}>() =>
  dynamic<FormComponentProps<V>>(() =>
    import('./getForm').then(m => m.getForm<V>())
  );
