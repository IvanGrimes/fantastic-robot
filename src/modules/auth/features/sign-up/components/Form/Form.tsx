import React from 'react';
import { TextField, Button, PasswordField, getForm } from '@modules/ui';
import { Grid } from '@material-ui/core';
import {
  validateName,
  validatePhone,
  validateEmail,
  password,
} from '../../../../utils/validations';
import { FormGrid } from './Form.styles';

export type FormFields = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type FormProps = {
  isVisible: boolean;
  onSubmit: (values: FormFields) => void;
  isLoading: boolean;
};

const FormComponent = getForm<FormFields>();

export const Form = ({ isVisible, onSubmit, isLoading }: FormProps) => (
  <FormComponent onSubmit={onSubmit}>
    {({ handleSubmit, submitting }) => (
      <FormGrid isVisible={isVisible} onSubmit={handleSubmit as any}>
        <Grid item container>
          <TextField
            name="name"
            placeholder="Имя"
            validate={validateName}
            disabled={isLoading}
          />
        </Grid>
        <Grid item container>
          <TextField
            name="phone"
            placeholder="Номер телефона"
            validate={validatePhone}
            disabled={isLoading}
          />
        </Grid>
        <Grid item container>
          <TextField
            name="email"
            placeholder="Email"
            validate={validateEmail}
            disabled={isLoading}
          />
        </Grid>
        <Grid item container>
          <PasswordField
            name="password"
            placeholder="Пароль"
            validate={password}
            disabled={isLoading}
          />
        </Grid>
        <Grid item container>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            loading={submitting}
            fullWidth
            disabled={isLoading}
          >
            Зарегистрироваться
          </Button>
        </Grid>
      </FormGrid>
    )}
  </FormComponent>
);
