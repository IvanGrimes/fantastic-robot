import React, { FunctionComponent, useCallback } from 'react';
import { RequestError, selectors, StationId } from '@shared';
import { listItemPadding, maxHeight, ParameterList } from '../ParameterList';
import { VirtualizedList } from '@components';
import { ListItem } from './ListItem';
import { debounce } from '@utils';

export type MetroListProps = {
  values: { [key: string]: boolean | undefined };
  onChange: (value: StationId) => void;
  list: ReturnType<typeof selectors.getMetroList>;
};

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
  const handleChange = useCallback(
    debounce((id: string) => onChange(id), 250),
    [onChange]
  );

  if (error.message) {
    return <Wrapper>{error.message}</Wrapper>;
  }

  return (
    <Wrapper isLoading={isLoading}>
      <VirtualizedList
        style={{ marginLeft: `-${listItemPadding}` }}
        itemSize={48}
        height={maxHeight - 15}
        width={`calc(100% + ${listItemPadding})`}
        itemCount={list.length}
        itemData={{
          list,
          values,
          onChange: handleChange,
        }}
      >
        {ListItem}
      </VirtualizedList>
    </Wrapper>
  );
};
