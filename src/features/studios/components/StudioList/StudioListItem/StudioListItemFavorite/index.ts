export type StudioListItemFavoriteProps = {
  className?: string;
  id: string;
  isActive: boolean;
  handleToggleFavorite: (id: string) => void;
};

export { StudioListItemFavorite } from './StudioListItemFavorite';
