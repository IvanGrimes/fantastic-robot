import React, { FunctionComponent } from 'react';
import { Grid } from '../Grid';
import { Header } from './Header';
import { Container } from '../Container';
import { Wrapper, Content } from './Layout.styles';

export const Layout: FunctionComponent = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>
      <Container>
        <Grid container spacing={4}>
          {children}
        </Grid>
      </Container>
    </Content>
  </Wrapper>
);
