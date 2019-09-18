import { StudioListItemProps } from '../index';

export type StudioListItemTypesProps = Required<
  Pick<StudioListItemProps, 'interiorIds'>
>;

export * from './StudioListItemInteriors';
