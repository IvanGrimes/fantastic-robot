import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@modules/ui';
import { routes } from '@utils/routes';
import { ServiceButton, ServicesLayout, Separator } from '../../../components';
import { Form } from './Form';

export const SignIn = () => (
  <ServicesLayout
    services={
      <Grid container item>
        <ServiceButton variant="vk">Продолжить с VK</ServiceButton>
      </Grid>
    }
    description={
      <>
        Нет аккаунта?{' '}
        <Link variant="primary" to={routes.signUp}>
          Зарегистрируйтесь
        </Link>
      </>
    }
  >
    <Grid container item>
      <Separator />
    </Grid>
    <Form />
  </ServicesLayout>
);
