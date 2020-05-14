import { GlobalStaticStylesManager } from '../../utils';
import { BreakpointKeysMap, breakpoints } from '../../theme';
import { SizeVariant, SpacingVariant } from './types';

const GRID_SIZES: SizeVariant[] = [
  'auto',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
];
const SPACINGS: SpacingVariant[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getSizeClassName = ({
  breakpoint,
  size,
}: {
  breakpoint: BreakpointKeysMap;
  size: SizeVariant;
}) => `grid-${breakpoint}-${size}`;

export const getSpaceClassName = ({ spacing }: { spacing: SpacingVariant }) =>
  `spacing-${spacing}`;

const generateGrid = (breakpoint: BreakpointKeysMap) => {
  const styles = GRID_SIZES.map((size) => {
    const className = `grid-${breakpoint}-${size}`;

    if (size === 'auto') {
      return `
        .${className} {
          flex-basis: auto;
          flex-grow: 0;
          max-width: none;
        }
      `;
    }

    const width = `${Math.round(((size as number) / 12) * 10e7) / 10e5}%`;

    return `
      .${getSizeClassName({ breakpoint, size })} {
        flex-basis: ${width};
        max-width: ${width};
        flex-grow: 0;
      }
    `;
  }).join('');

  return `
    @media screen and (min-width: ${breakpoints[breakpoint]}px) {
      ${styles}
    }
  `;
};

const getOffset = (value: number, divine = 1) =>
  `${value / divine}${String(value).replace(String(value), '') || 'px'}`;

const generateGutter = () =>
  SPACINGS.map((spacing) => {
    const size = spacing * 8;

    if (size) {
      const className = getSpaceClassName({
        spacing: spacing as SpacingVariant,
      });
      return `
        .${className} {
          margin: -${getOffset(size, 2)};
          width: calc(100% + ${getOffset(size)});
        }
        .${className} > [class*='grid-item'] {
            padding: ${getOffset(size, 2)};
          }
      `;
    }

    return '';
  });

GlobalStaticStylesManager.getInstance().add(
  `
  .grid-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.grid-item {
  margin: 0;
  box-sizing: border-box;
}

.grid-direction-column {
  flex-direction: column;
}

.grid-direction-column-reverse {
  flex-direction: column-reverse;
}

.grid-direction-row-reverse {
  flex-direction: row-reverse;
}

.grid-wrap-nowrap {
  flex-wrap: nowrap;
}

.grid-wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.grid-align-items-center {
  align-items: center;
}

.grid-align-items-flex-start {
  align-items: flex-start;
}

.grid-align-items-flex-end {
  align-items: flex-end;
}

.grid-align-items-baseline {
  align-items: baseline;
}

.grid-align-content-center {
  align-content: center;
}

.grid-align-content-flex-start {
  align-content: flex-start;
}

.grid-align-content-flex-end {
  align-content: flex-end;
}

.grid-align-content-space-between {
  align-content: space-between;
}

.grid-align-content-space-around {
  align-content: space-around;
}

.grid-justify-content-center {
  justify-content: center;
}

.grid-justify-content-flex-end {
  justify-content: flex-end;
}

.grid-justify-content-space-between {
  justify-content: space-between;
}

.grid-justify-content-space-around {
  justify-content: space-around;
}

.grid-justify-content-space-evenly {
  justify-content: space-evenly;
}
${['xs', 'sm', 'md', 'lg', 'xl']
  .map((breakpoint) => generateGrid(breakpoint as BreakpointKeysMap))
  .join('')}
  ${generateGutter().join('')};
  `
);
