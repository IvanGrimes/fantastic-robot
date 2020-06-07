import { StationId } from '@model';

export type MetroListProps = {
  values: { [key: string]: boolean | undefined };
  onChange: (value: StationId) => void;
};
