import React, { useCallback, useState } from 'react';
import { Dialog, Grid } from '@material-ui/core';
import { SlideTransition, DynamicRendering } from '@modules/ui';
import { Form } from '../../features/sign-up';

export const Popup = () => {
  const [isOpen, setOpen] = useState(true);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      fullWidth
    >
      <DynamicRendering>
        <Grid container>
          <Form />
        </Grid>
      </DynamicRendering>
    </Dialog>
  );
};
