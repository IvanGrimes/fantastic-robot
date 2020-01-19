import React from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import { routes } from '@utils/routes';
import { ServicesLayout, Separator } from '../../../components';
import { Form } from './Form';
import { VkAuthButton } from '../../social';

const { Link } = ui

export const SignIn = () => (
  <ServicesLayout
    services={
      <Grid container item>
        <VkAuthButton>Войти через VK</VkAuthButton>
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
