import React from 'react';
import * as ui from '@modules/ui';
import { Grid } from '@material-ui/core';
import { routes } from '@utils/routes';
import { ChevronLeft } from '@material-ui/icons';
import { validateEmail } from '../../../../utils/validations';
import { FormGrid } from '../../../../components';

const { TextField, Button, Form: FormComponent, Link } = ui;

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
        <Grid container item alignItems="center" justify="space-between">
          <Grid item xs={6}>
            <Link variant="primary" to={routes.signIn}>
              <Grid container spacing={4} alignItems="center">
                <Grid container item xs={1}>
                  <ChevronLeft />
                </Grid>
                <Grid item>Назад</Grid>
              </Grid>
            </Link>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              loading={submitting}
              fullWidth
            >
              Сброс пароля
            </Button>
          </Grid>
        </Grid>
      </FormGrid>
    )}
  </FormComponent>
);
