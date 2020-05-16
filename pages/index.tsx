import React from 'react';
import { List } from '../modules/list';
import { Filters } from '../modules/filters';
import { Layout } from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Filters />
      <List variant="studio" />
    </Layout>
  );
};
