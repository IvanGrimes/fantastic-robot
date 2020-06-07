import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '../internal';
import { Wrapper, Content } from './Layout.styles';

export const Layout: FunctionComponent = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>
      <Container>
        <Grid container spacing={6}>
          {children}
        </Grid>
      </Container>
    </Content>
    <Footer />
  </Wrapper>
);
