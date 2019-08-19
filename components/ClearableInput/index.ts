export type ClearableInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export { ClearableInput } from './ClearableInput';
