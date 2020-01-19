import React, { memo, useEffect, useRef } from 'react';
import { Grid, Portal } from '@material-ui/core';
import * as ui from '@modules/ui';
import dequal from 'dequal';
import { List, ListItem } from './DateRange.styles';
import { useFunctional } from '../useFunctional';
import { Input } from '../Input';
import { DatePicker } from '../DatePicker';

export type DesktopDateRangeProps = {
  isLoading: boolean;
};

const { Loader } = ui

const _DesktopDateRange = ({ isLoading }: DesktopDateRangeProps) => {
  const wrapperRef = useRef<HTMLElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const {
    list,
    isPickerVisible,
    handleClose,
    handleOpen,
    pickerPosition,
  } = useFunctional();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const picker = pickerRef.current;
    const handleOutsideClick = (ev: MouseEvent) => {
      if (
        wrapper &&
        picker &&
        isPickerVisible &&
        // @ts-ignore
        !wrapper.contains(ev.target) &&
        // @ts-ignore
        !picker.contains(ev.target)
      ) {
        handleClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [handleClose, isPickerVisible]);

  return (
    <Grid container ref={wrapperRef}>
      <List fill={!list.length}>
        {list.map(({ key, rangeFrom, rangeTo }) => (
          <ListItem key={key}>
            <Input
              fromDate={rangeFrom}
              toDate={rangeTo}
              isFromActive={!rangeFrom}
              isToActive={!rangeTo}
              onClick={handleOpen}
            />
          </ListItem>
        ))}
        <ListItem>
          {isLoading ? (
            <Loader width="306px" height="40px" />
          ) : (
            <Input isFromActive isToActive onClick={handleOpen} />
          )}
        </ListItem>
      </List>
      <Portal>
        <DatePicker
          ref={pickerRef}
          isActive={isPickerVisible}
          {...pickerPosition}
        />
      </Portal>
    </Grid>
  );
};

export const DesktopDateRange = memo(_DesktopDateRange, dequal);
