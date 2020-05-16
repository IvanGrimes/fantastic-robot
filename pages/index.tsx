import React from 'react';
import { Filters, List } from '../modules/catalog';
import { Layout } from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Filters />
      <List variant="studio" />
    </Layout>
  );
};
