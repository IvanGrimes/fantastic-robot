import React, { FunctionComponent, ReactNode } from 'react';
import { Checkbox } from '@components';
import { Wrapper } from './ListItem.styles';

export const ListItem: FunctionComponent<{
  name: ReactNode;
  value: boolean;
  onChange: () => void;
}> = ({ value, name, onChange }) => (
  <Wrapper item>
    <Checkbox label={name} checked={value} onChange={onChange} />
  </Wrapper>
);
