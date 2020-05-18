import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import s from './Layout.module.scss';
import { Footer } from './Footer';
import { Container, Grid } from '../internal';

export const Layout: FunctionComponent = ({ children }) => (
  <div className={s.layout}>
    <Header />
    <Container className={s.content} variant="fluid">
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
    <Footer />
  </div>
);
