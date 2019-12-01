import React, {
  useState,
  useRef,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useContext,
} from 'react';
import {
  CalendarContext,
  CalendarContextType,
} from '../../../CalendarContainer';
import { ViewColumnMenu } from './ViewColumnMenu';

export const ViewColumn = () => {
  const [isOpen, setOpen] = useState(false);
  const { step, setStep, availableSteps } = useContext(CalendarContext);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = useCallback(() => setOpen(prevState => !prevState), []);
  const handleClose = useCallback((ev?: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      (ev && anchorRef.current.contains(ev.target as HTMLElement))
    ) {
      return;
    }

    setOpen(false);
  }, []);
  const handleClickMenuItem = useCallback(
    (nextStep: CalendarContextType['step']) => (
      ev: MouseEvent<HTMLLIElement>
    ) => {
      handleClose(ev);

      setStep(nextStep);
    },
    [handleClose, setStep]
  );
  const handleListKeyDown = useCallback((ev: KeyboardEvent<any>) => {
    if (ev.key === 'Tab') {
      ev.preventDefault();

      setOpen(false);
    }
  }, []);

  return (
    <ViewColumnMenu
      availableSteps={availableSteps}
      anchorRef={anchorRef}
      isOpen={isOpen}
      handleToggle={handleToggle}
      handleClose={handleClose}
      handleListKeyDown={handleListKeyDown}
      handleClickMenuItem={handleClickMenuItem}
      step={step}
    />
  );
};
