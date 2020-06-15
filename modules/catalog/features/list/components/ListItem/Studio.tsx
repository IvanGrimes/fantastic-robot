import React, { FunctionComponent } from 'react';
import { Typography, Card, CardActionArea, CardContent } from '@components';
import { CardMedia } from './ListItem.styles';
import { Studio as StudioType } from '../../../../model';

export const Studio: FunctionComponent<{ entity?: StudioType }> = ({
  entity: { photos, name, description } = {
    name: '1',
    description: '1',
    photos: [],
  },
}) => {
  const photo = photos[0] || {};

  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia
          alt={photo.description}
          image={`${process.env.API_ENDPOINT}/image/?id=${photo.imageId}&type=studio`}
          title={photo.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
