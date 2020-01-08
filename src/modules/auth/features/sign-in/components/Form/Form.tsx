import React from 'react';
import {
  TextField,
  Button,
  PasswordField,
  Form as FormComponent,
} from '@modules/ui';
import { Grid } from '@material-ui/core';
import { routes } from '@utils/routes';
import { validateEmail, password } from '../../../../utils/validations';
import { FormGrid } from '../../../../components';
import { Link } from './Form.styles';

export const Form = () => (
  <FormComponent onSubmit={console.log}>
    {({ submitting }) => (
      <FormGrid>
        <Grid item container>
          <TextField
            name="email"
            placeholder="Электронная почта"
            validate={validateEmail}
          />
        </Grid>
        <Grid item container>
          <PasswordField
            name="password"
            placeholder="Пароль"
            validate={password}
          />
        </Grid>
        <Grid item container>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            loading={submitting}
            fullWidth
          >
            Войти
          </Button>
        </Grid>
        <Grid item container>
          <Link to={routes.passwordRecovery}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              loading={submitting}
              fullWidth
            >
              Забыли пароль?
            </Button>
          </Link>
        </Grid>
      </FormGrid>
    )}
  </FormComponent>
);
