export type FilterPropertyListItemProps = {
  id: string;
  name: string;
  onChange: (id?: string) => () => void;
  isActive: boolean;
};
