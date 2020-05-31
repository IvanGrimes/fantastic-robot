import React, { FunctionComponent } from 'react';
import { StudioEntity } from '@model';
import { Typography, Grid } from '@components';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Sizes } from './types';

export const Studio: FunctionComponent<{ entity: StudioEntity } & Sizes> = ({
  entity,
  ...sizes
}) => {
  const { studio } = entity.getData();
  const photo = studio.photoIds[0];

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid item component="li" {...sizes}>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={photo.description}
            height="250"
            image={`${process.env.API_ENDPOINT}image/?id=${photo.imageId}&type=studio`}
            title={photo.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {studio.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {studio.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
