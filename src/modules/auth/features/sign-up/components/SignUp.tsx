import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@modules/ui';
import { routes } from '@utils/routes';
import { Form } from './Form';
import {
  ContentGrid,
  Separator,
  ServiceButton,
  ServicesLayout,
} from '../../../components';

type Props = {
  showForm: boolean;
  handleShowForm: () => void;
};

export const SignUp = ({ showForm, handleShowForm }: Props) => (
  <ContentGrid container alignItems="center">
    <ServicesLayout
      services={
        <>
          <Grid container item>
            <ServiceButton variant="vk">Продолжить с VK</ServiceButton>
          </Grid>
          <Grid container item>
            <Separator />
          </Grid>
          {showForm ? null : (
            <Grid container item>
              <ServiceButton variant="email" onClick={handleShowForm}>
                Через почту
              </ServiceButton>
            </Grid>
          )}
        </>
      }
      description={
        <>
          Уже есть аккаунт?{' '}
          <Link variant="primary" to={routes.signIn}>
            Войти
          </Link>
        </>
      }
    >
      <Form isVisible={showForm} />
    </ServicesLayout>
  </ContentGrid>
);
