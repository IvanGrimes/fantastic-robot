import React from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import { routes } from '@utils/routes';
import { FormFields, Form } from './Form';
import {
  ContentGrid,
  Separator,
  ServiceButton,
  ServicesLayout,
} from '../../../components';
import { VkAuthButton } from '../../social';

const { Link } = ui

type Props = {
  showForm: boolean;
  handleShowForm: () => void;
  handleSubmit: (values: FormFields) => void;
  isLoading: boolean;
};

export const SignUp = ({
  showForm,
  handleShowForm,
  handleSubmit,
  isLoading,
}: Props) => (
  <ContentGrid container alignItems="center">
    <ServicesLayout
      services={
        <>
          <Grid container item>
            <VkAuthButton>Продолжить с VK</VkAuthButton>
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
      <Form
        isVisible={showForm}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </ServicesLayout>
  </ContentGrid>
);
