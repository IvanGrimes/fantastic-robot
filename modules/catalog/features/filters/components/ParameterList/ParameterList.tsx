import React, { FunctionComponent, ReactNode } from 'react';
import { Wrapper } from './Wrapper';
import { ListItem } from './ListItem';
import { List } from './ParameterList.styles';

export const ParameterList: FunctionComponent<
  | { title: string; children: ReactNode; list?: undefined }
  | {
      title: string;
      list: { id: string; name: string }[];
      values: { [key: string]: boolean | undefined };
      onChange: (value: string) => void;
    }
> = (props) => {
  if (props.list) {
    const { title, list, values, onChange } = props;

    return (
      <Wrapper title={title}>
        <List container as="ul" spacing={1}>
          {list.map(({ id, name }) => (
            <ListItem
              key={id}
              name={name}
              value={Boolean(values[id])}
              onChange={() => onChange(id)}
            />
          ))}
        </List>
      </Wrapper>
    );
  }

  return <Wrapper title={props.title}>{props.children}</Wrapper>;
};
