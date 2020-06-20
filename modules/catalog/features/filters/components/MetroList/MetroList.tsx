import React, { FunctionComponent } from 'react';
import { RequestError } from '@shared';
import { MetroListSuccess } from './MetroListSuccess';
import { MetroListProps } from './types';
import { ParameterList } from '../ParameterList';

const Wrapper: FunctionComponent<{ isLoading?: boolean }> = ({
  children,
  isLoading,
}) => (
  <ParameterList title="Список метро" isLoading={isLoading}>
    {children}
  </ParameterList>
);

export const MetroList: FunctionComponent<
  MetroListProps & { isLoading: boolean; error: RequestError }
> = ({ isLoading, onChange, values, list, error }) => {
  if (error.message) {
    return <Wrapper>{error.message}</Wrapper>;
  }

  return (
    <Wrapper isLoading={isLoading}>
      <MetroListSuccess list={list} values={values} onChange={onChange} />
    </Wrapper>
  );
};
