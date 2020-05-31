import React from 'react';
import { Layout } from '@components';
import { List, Filters } from '../modules/catalog';

export default () => {
  return (
    <Layout>
      <Filters />
      <List variant="studio" />
    </Layout>
  );
};
