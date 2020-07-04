import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Skeleton, Grid } from '@components';
import { debounce } from '@utils';
import { Wrapper } from './Wrapper';
import { ListItem } from './ListItem';
import { List } from './ParameterList.styles';
import { MAX_HEIGHT } from './constants';

export const ParameterList: FunctionComponent<
  | {
      isLoading?: boolean;
      title: string;
      children: ReactNode;
      list?: undefined;
    }
  | {
      isLoading?: boolean;
      title: string;
      list: { id: string; name: string }[];
      values: { [key: string]: boolean | undefined };
      onChange: (value: string) => void;
    }
> = (props) => {
  const [listRef, setListRef] = useState<null | HTMLUListElement>(null);

  if (props.isLoading) {
    return (
      <Wrapper title={<Skeleton variant="rect" />}>
        <Grid container spacing={1}>
          <Grid item container>
            <Skeleton variant="rect" width="100%" height="38px" />
          </Grid>
          <Grid item container>
            <Skeleton variant="rect" width="100%" height="38px" />
          </Grid>
          <Grid item container>
            <Skeleton variant="rect" width="100%" height="38px" />
          </Grid>
          <Grid item container>
            <Skeleton variant="rect" width="100%" height="38px" />
          </Grid>
          <Grid item container>
            <Skeleton variant="rect" width="100%" height="38px" />
          </Grid>
        </Grid>
      </Wrapper>
    );
  }

  if (props.list) {
    const { title, list, values, onChange } = props;

    return (
      <Wrapper title={title}>
        <List
          ref={setListRef as any}
          hasOverflow={Boolean(listRef && listRef.scrollHeight > MAX_HEIGHT)}
          container
          as="ul"
          spacing={1}
        >
          {list.map(({ id, name }) => (
            <ListItem
              key={id}
              name={name}
              value={Boolean(values[id])}
              onChange={debounce(() => onChange(id), 250)}
            />
          ))}
        </List>
      </Wrapper>
    );
  }

  return <Wrapper title={props.title}>{props.children}</Wrapper>;
};
