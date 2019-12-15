import React from 'react';
import { Hidden } from '@components/Hidden';
import { Typography } from '@material-ui/core';

export const Logo = () => (
  <>
    <Hidden xsDown>
      <Typography variant="h5" component="span" style={{ marginRight: '16px' }}>
        CodeName
      </Typography>
    </Hidden>
    <Hidden smUp>
      <Typography variant="h3" component="span" style={{ marginRight: '16px' }}>
        CN
      </Typography>
    </Hidden>
  </>
);
