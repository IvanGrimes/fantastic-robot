import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from '@modules/ui';
import { routes } from '@utils/routes';
import { ServiceButton } from '../../../components/ServiceButton';
import { Form } from './Form';
import { MainGrid, WrapperGrid } from './SignUp.styles';
import { Separator } from '../../../components';

type Props = {
  showForm: boolean;
  handleShowForm: () => void;
};

export const SignUp = ({ showForm, handleShowForm }: Props) => (
  <MainGrid container alignItems="center">
    <WrapperGrid container spacing={3} isFormVisible={showForm}>
      <Grid container item spacing={3}>
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
      </Grid>
      <Form isVisible={showForm} />
      <Grid container item>
        <Separator />
      </Grid>
      <Grid container item>
        <Typography variant="body2">
          Уже есть аккаунт?{' '}
          <Link variant="primary" to={routes.signIn}>
            Войти
          </Link>
        </Typography>
      </Grid>
    </WrapperGrid>
  </MainGrid>
);
