import { StationId, selectors } from '@shared';

export type MetroListProps = {
  values: { [key: string]: boolean | undefined };
  onChange: (value: StationId) => void;
  list: ReturnType<typeof selectors.getMetroList>;
};
