import React from 'react';
import { Typography } from '@material-ui/core';
import { DescriptionGrid } from './Description.styles';
import { Separator } from '../Details.styles';

type DescriptionProps = {
  content?: string;
};

export const Description = ({ content }: DescriptionProps) =>
  content ? (
    <>
      <Separator marginTop={24} />
      <DescriptionGrid container>
        <Typography>{content}</Typography>
      </DescriptionGrid>
    </>
  ) : null;
