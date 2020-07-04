import React, { FunctionComponent, useCallback } from 'react';
import { RequestError, selectors, StationId } from '@shared';
import { debounce } from '@utils';
import { VirtualizedList } from './MetroList.styles';
import { LIST_ITEM_PADDING, MAX_HEIGHT, ParameterList } from '../ParameterList';
import { ListItem } from './ListItem';

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
        itemSize={48}
        height={MAX_HEIGHT - 15}
        width={`calc(100% + ${LIST_ITEM_PADDING})`}
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
