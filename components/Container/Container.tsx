import React from 'react';
import { Container as MaterialContainer } from '@material-ui/core';

export type ContainerProps = {
  variant?: 'primary' | 'secondary' | 'fluid';
};

export const Container: StyleableComponent<ContainerProps> = ({
  variant = 'fluid',
  className,
  children,
}) => {
  switch (variant) {
    case 'fluid':
      return (
        <MaterialContainer className={className} maxWidth={false}>
          {children}
        </MaterialContainer>
      );
    case 'primary':
      return (
        <MaterialContainer className={className} maxWidth="lg" fixed>
          {children}
        </MaterialContainer>
      );
    case 'secondary':
      return (
        <MaterialContainer className={className} maxWidth="md" fixed>
          {children}
        </MaterialContainer>
      );
    default:
      return null;
  }
};
