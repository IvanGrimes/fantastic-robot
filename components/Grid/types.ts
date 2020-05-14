import { ComponentProps, ReactNode } from 'react';
import { BreakpointKeysMap } from '../../theme';

export type SizeVariant =
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type SpacingVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GridProps = DefaultGrid | GridItem | GridContainer;

type WithElementProps<P extends GeneralProps> = P &
  ComponentProps<Diff<P['element'], undefined>>;

type GridContainer = WithElementProps<GeneralProps> &
  GridContainerProps & {
    container: true;
    item?: false;
  };

type GridItem = WithElementProps<GeneralProps> & {
  container?: false;
  item: true;
};

type DefaultGrid = WithElementProps<GeneralProps> & {
  container?: false;
  item?: false;
};

type GeneralProps = UIComponentProps<
  { [key in BreakpointKeysMap]?: boolean | SizeVariant } & {
    children?: ReactNode | ReactNode[] | null;
  }
>;

type GridContainerProps = {
  spacing?: SpacingVariant;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  alignContent?:
    | 'stretch'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};
