import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as ui from '@modules/ui';
import { Block } from '../Block';
import { useDetails } from '../DetailsContext';

const { Loader } = ui

export const descriptionSkeleton = (
  <>
    <Grid item container>
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
      <Loader style={{ marginTop: '10px' }} width="100%" height="20px" />
    </Grid>
  </>
);

export const Description = () => {
  const {
    variant,
    isStudioLoading,
    studio: { description },
  } = useDetails();

  if (variant !== 'studio') {
    return null;
  }

  return (
    <Block
      isLoading={isStudioLoading || !description}
      skeleton={descriptionSkeleton}
    >
      <Grid item>
        <Typography>{description}</Typography>
      </Grid>
    </Block>
  );
};
