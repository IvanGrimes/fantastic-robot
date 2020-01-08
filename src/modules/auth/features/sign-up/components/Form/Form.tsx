import React from 'react';
import {
  TextField,
  Button,
  PasswordField,
  Form as FormComponent,
} from '@modules/ui';
import { Grid } from '@material-ui/core';
import {
  validateName,
  validatePhone,
  validateEmail,
  password,
} from '../../../../utils/validations';
import { FormGrid } from './Form.styles';

export type FormProps = { isVisible: boolean };

export const Form = ({ isVisible }: FormProps) => (
  <FormComponent onSubmit={console.log}>
    {({ submitting }) => (
      <FormGrid isVisible={isVisible}>
        <Grid item xs={12}>
          <TextField name="name" placeholder="Имя" validate={validateName} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phone"
            placeholder="Номер телефона"
            validate={validatePhone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            placeholder="Email"
            validate={validateEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordField
            name="password"
            placeholder="Пароль"
            validate={password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            loading={submitting}
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </Grid>
      </FormGrid>
    )}
  </FormComponent>
);
