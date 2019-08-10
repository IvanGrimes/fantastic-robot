import React, {
  ChangeEvent,
  memo,
  useCallback,
  useState,
} from 'react';

type Props = {
  className: string;
  handleChangeName: (value: string) => void;
};

const _StudioListFilter = ({ handleChangeName }: Props) => {
  const [name, setName] = useState('');
  const onChangeName = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const nextValue = ev.target.value;

    setName(nextValue);
    handleChangeName(nextValue);
  }, [handleChangeName]);

  return <input onChange={onChangeName} value={name} />;
};

export const StudioListFilter = memo(_StudioListFilter);
