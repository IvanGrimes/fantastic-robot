import React, { FunctionComponent } from 'react';
import { Typography } from '@components';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { StudioEntity } from '../../internal';
import { CardMedia } from './ListItem.styles';

const defaultEntity = new StudioEntity();

export const Studio: FunctionComponent<{ entity?: StudioEntity }> = ({
  entity = defaultEntity,
}) => {
  const { studio } = entity.getData();
  const photo = studio.photos[0] || {};

  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia
          alt={photo.description}
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
  );
};
