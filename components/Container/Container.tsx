import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import s from './Container.module.scss';

export const Container: FunctionComponent<UIComponentProps<{
  variant?: 'primary' | 'secondary' | 'fluid';
}>> = ({
  className,
  element: Component = 'div',
  variant = 'fluid',
  children,
}) => (
  <Component className={cn(s.container, { [s[variant]]: true }, className)}>
    {children}
  </Component>
);
