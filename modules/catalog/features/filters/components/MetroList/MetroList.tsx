import React, { FunctionComponent } from 'react';
import { MetroListSuccess } from './MetroListSuccess';
import { MetroListProps } from './types';
import { ParameterList } from '../ParameterList';

const Wrapper: FunctionComponent = ({ children }) => (
  <ParameterList title="Список метро">{children}</ParameterList>
);

export const MetroList: FunctionComponent<
  MetroListProps & { isLoading: boolean }
> = ({ isLoading, onChange, values, list }) => {
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
