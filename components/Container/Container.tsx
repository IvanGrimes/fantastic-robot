import React from 'react';
import { Container as MaterialContainer } from '@material-ui/core';

export const Container: StyleableComponent<{
  variant?: 'primary' | 'secondary' | 'fluid';
}> = ({ variant = 'fluid', className, children }) => {
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
