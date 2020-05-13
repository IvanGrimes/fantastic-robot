import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import s from './Layout.module.scss';
import { Footer } from './Footer';
import { Container } from '../internal';

export const Layout: FunctionComponent = ({ children }) => (
  <div className={s.layout}>
    <Header />
    <Container className={s.content} variant="primary">
      {children}
    </Container>
    <Footer />
  </div>
);
