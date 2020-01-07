import React from 'react';
import {
  Form as FormComponent,
  TextField,
  Button,
  PasswordField,
} from '@modules/ui';
import {
  validateName,
  validatePhone,
  validateEmail,
  password,
} from '../../../utils/validations';

export const Form = () => {
  return (
    <FormComponent onSubmit={console.log}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="name" placeholder="Имя" validate={validateName} />
          <TextField
            name="phone"
            placeholder="Номер телефона"
            validate={validatePhone}
          />
          <TextField
            name="email"
            placeholder="Email"
            validate={validateEmail}
          />
          <PasswordField
            name="password"
            placeholder="Пароль"
            validate={password}
          />
          <Button type="submit">Зарегистрироваться</Button>
        </form>
      )}
    </FormComponent>
  );
};
