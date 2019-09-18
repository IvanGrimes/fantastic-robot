import { StudioListItemProps } from '../index';

export type StudioListItemPhotosProps = Required<
  Pick<StudioListItemProps, 'photoIds'>
>;

export * from './StudioListItemPhotos';
