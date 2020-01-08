import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ServicesLayout } from '../../../components';
import { Form } from './Form';

export const PasswordReset = () => (
  <ServicesLayout>
    <Grid container item>
      <Typography variant="h6">Сброс пароля</Typography>
      <Typography>
        Введите электронную почту, которую вы указывали при регистрации и мы
        отправим вам ссылку на сброс пароля
      </Typography>
    </Grid>
    <Form />
  </ServicesLayout>
);
