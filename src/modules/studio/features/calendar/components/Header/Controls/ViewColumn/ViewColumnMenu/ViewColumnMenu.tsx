import React, {
  RefObject,
  Fragment,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useEffect,
} from 'react';
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import { ViewColumn as ViewColumnIcon } from '../ViewColumn.styles';
import { CalendarContextType } from '../../../../CalendarContext';

type Props = {
  availableSteps: CalendarContextType['availableSteps'];
  anchorRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  handleToggle: () => void;
  handleClose: (ev?: MouseEvent<EventTarget>) => void;
  handleListKeyDown: (ev: KeyboardEvent<any>) => void;
  handleClickMenuItem: (
    nextStep: CalendarContextType['step']
  ) => (ev: MouseEvent<HTMLLIElement>) => void;
  step: CalendarContextType['step'];
};

const getCountActiveFlags = (object: {}): number =>
  Object.values<boolean>(object).reduce<number>(
    (acc, item) => (item ? acc + 1 : acc),
    0
  );

export const ViewColumnMenu = ({
  availableSteps,
  anchorRef,
  isOpen,
  handleToggle,
  handleClose,
  handleListKeyDown,
  handleClickMenuItem,
  step,
}: Props) => {
  const shouldRender = useMemo(() => getCountActiveFlags(availableSteps) > 1, [
    availableSteps,
  ]);

  useEffect(() => {
    if (!shouldRender && isOpen) {
      handleClose();
    }
  }, [handleClose, isOpen, shouldRender]);

  return shouldRender ? (
    <Fragment>
      <IconButton
        size="small"
        ref={anchorRef}
        aria-controls={isOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ViewColumnIcon />
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
                  {availableSteps['0'] && (
                    <MenuItem
                      onClick={handleClickMenuItem(0)}
                      selected={isOpen && step === 0}
                    >
                      1 день
                    </MenuItem>
                  )}
                  {availableSteps['2'] && (
                    <MenuItem
                      onClick={handleClickMenuItem(2)}
                      selected={isOpen && step === 2}
                    >
                      3 дня
                    </MenuItem>
                  )}
                  {availableSteps['4'] && (
                    <MenuItem
                      onClick={handleClickMenuItem(4)}
                      selected={isOpen && step === 4}
                    >
                      5 дней
                    </MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  ) : null;
};
