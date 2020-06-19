import React, { FunctionComponent } from 'react';
import { MetroListSuccess } from './MetroListSuccess';
import { MetroListProps } from './types';
import { ParameterList } from '../ParameterList';
import { RequestError } from '@shared';

const Wrapper: FunctionComponent = ({ children }) => (
  <ParameterList title="Список метро">{children}</ParameterList>
);

export const MetroList: FunctionComponent<
  MetroListProps & { isLoading: boolean; error: RequestError }
> = ({ isLoading, onChange, values, list, error }) => {
  if (error.message) {
    return <Wrapper>{error.message}</Wrapper>;
  }

  if (isLoading) {
    return (
      <Wrapper>
        <p>metro-list is loading</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <MetroListSuccess list={list} values={values} onChange={onChange} />
    </Wrapper>
  );
};
