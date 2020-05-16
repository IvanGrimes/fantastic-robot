import React from 'react';
import { Filters, List } from '../modules/list';
import { Layout } from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Filters />
      <List variant="studio" />
    </Layout>
  );
};
