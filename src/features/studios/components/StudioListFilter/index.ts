export type StudioListFilterProps = {
  className?: string;
};

export type StudioListFilterViewProps = {
  className: string;
  isVisible: boolean;
  handleToggleVisibility: () => void;
  handleClearFilters: () => void;
};

export {
  StudioListFilterContainer as StudioListFilter,
} from './StudioListFilterContainer';
