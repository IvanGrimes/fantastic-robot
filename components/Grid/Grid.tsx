import React, { FunctionComponent } from 'react';
import { GridProps, SizeVariant } from './types';
import { BreakpointKeysMap } from '../../theme';
import { getSizeClassName, getSpaceClassName } from './Grid.styles';

export const Grid: FunctionComponent<GridProps> = (props) => {
  const {
    className = '',
    container = false,
    item = false,
    xl = false,
    lg = false,
    md = false,
    sm = false,
    xs = false,
    element = 'div',
    children = null,
  } = props;
  const Component = element;
  const containerClass = container ? 'grid-container' : '';
  const itemClass = item ? 'grid-item' : '';
  const sizeClasses = Object.entries<SizeVariant | boolean>({
    xl,
    lg,
    md,
    sm,
    xs,
  })
    .map(([breakpoint, size]) =>
      size
        ? getSizeClassName({
            breakpoint: breakpoint as BreakpointKeysMap,
            size: size as SizeVariant,
          })
        : ''
    )
    .join(' ');
  let extendedClassName = `${containerClass} ${itemClass} ${sizeClasses} ${className}`;

  if (props.container) {
    const {
      spacing = 0,
      direction = 'row',
      wrap = 'wrap',
      justifyContent = 'flex-start',
      alignContent = 'stretch',
      alignItems = 'stretch',
    } = props;
    const spacingClass = spacing ? getSpaceClassName({ spacing }) : '';
    const directionClass =
      direction !== 'row' ? `grid-direction-${direction}` : '';
    const wrapClass = wrap !== 'wrap' ? `grid-wrap-${wrap}` : '';
    const justifyContentClass =
      justifyContent !== 'flex-start'
        ? `grid-justify-content-${justifyContent}`
        : '';
    const alignContentClass =
      alignContent !== 'stretch' ? `grid-align-content-${alignContent}` : '';
    const alignItemsClass =
      alignItems !== 'stretch' ? `grid-align-items-${alignItems}` : '';

    extendedClassName += ` ${spacingClass} ${directionClass} ${wrapClass} ${justifyContentClass} ${alignContentClass} ${alignItemsClass}`;
  }

  return <Component className={extendedClassName.trim()}>{children}</Component>;
};
