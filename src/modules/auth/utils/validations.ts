import { Validator } from '@modules/auth/utils/Validator';

export const validateName = (value: string) =>
  new Validator(value)
    .min(3, 'Имя должно содержать не меньше 3-х букв')
    .max(32, 'Имя не должно содержать больше 32 букв')
    .required('Поле обязательно для заполнения')
    .getError();
export const validatePhone = (value: string) =>
  new Validator(value)
    .phone('Неверный номер телефона')
    .required('Номе телефона обязателен для заполнения')
    .getError();
export const validateEmail = (value: string) =>
  new Validator(value)
    .email('Неверный электронный адрес')
    .required('Электронный адрес обязателен для заполнения')
    .getError();
export const password = (value: string) =>
  new Validator(value)
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(64, 'Пароль должен содержать не больше 64 символов')
    .required('Пароль обязателен для заполнения')
    .getError();
