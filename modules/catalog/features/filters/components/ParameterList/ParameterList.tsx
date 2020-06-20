import React, { FunctionComponent, ReactNode } from 'react';
import { Wrapper } from './Wrapper';
import { ListItem } from './ListItem';
import { List } from './ParameterList.styles';
import { Skeleton } from '@components';
import { Grid } from '@components';

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
