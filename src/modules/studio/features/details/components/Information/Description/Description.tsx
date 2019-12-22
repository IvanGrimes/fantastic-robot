import React from 'react';
import { Typography } from '@material-ui/core';
import { DescriptionGrid } from './Description.styles';

type DescriptionProps = {
  content: string;
};

export const Description = ({ content }: DescriptionProps) => (
  <DescriptionGrid container>
    <Typography>{content}</Typography>
  </DescriptionGrid>
);
