import { service } from '@modules/services';

export type SignUpInput = {
  mail: string;
  mobile: string;
  name: string;
  password: string;
  smsCode: string;
};

export type SignUpResponse = SignUpSuccess | SignUpErrors;

export type SignUpSuccess = {};

export type SignUpErrors = {
  errors: {
    mobile: string;
    mail: string;
  };
};

export const signUp = (input: SignUpInput) =>
  service.post<SignUpResponse>('/api/user/register', input);
