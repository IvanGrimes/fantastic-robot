import React from 'react';
import cn from 'classnames';
import s from './Container.module.scss';

export const Container: UIComponent<{
  variant?: 'primary' | 'secondary' | 'fluid';
}> = ({
  className,
  element: Component = 'div',
  variant = 'fluid',
  children,
}) => (
  <Component className={cn(s.container, { [s[variant]]: true }, className)}>
    {children}
  </Component>
);
