import React from 'react';
import { List } from '@modules/list';
import { Filters } from '@modules/filters';
import { Layout } from '@components';

export default () => {
  return (
    <Layout>
      <Filters />
      <List variant="studio" />
    </Layout>
  );
};
