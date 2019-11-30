import React, {
  useState,
  useRef,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  Fragment,
  useContext,
} from 'react';
import {
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import { ViewColumn } from './ColumnMenu.styles';
import {
  CalendarContext,
  CalendarContextType,
} from '../../../CalendarContainer';

export const ColumnMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { step, setStep } = useContext(CalendarContext);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = useCallback(() => setOpen(prevState => !prevState), []);
  const handleClose = useCallback((ev: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(ev.target as HTMLElement)
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
    <Fragment>
      <IconButton
        size="small"
        ref={anchorRef}
        aria-controls={isOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ViewColumn />
      </IconButton>
      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown as any}
                >
                  <MenuItem
                    onClick={handleClickMenuItem(0)}
                    selected={isOpen && step === 0}
                  >
                    1 день
                  </MenuItem>
                  <MenuItem
                    onClick={handleClickMenuItem(2)}
                    selected={isOpen && step === 2}
                  >
                    3 дня
                  </MenuItem>
                  <MenuItem onClick={handleClose}>5 дней</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};
