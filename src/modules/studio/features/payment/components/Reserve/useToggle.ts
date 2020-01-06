import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setOpen] = useState(initialState);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return { isVisible: isOpen, handleOpen, handleClose };
};
