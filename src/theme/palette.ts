import { ThemeProps } from './types';

export const getPalette = ({ theme }: ThemeProps) => theme.palette;

export const getPrimaryPalette = (props: ThemeProps) =>
  getPalette(props).primary;

export const getGreyPalette = (props: ThemeProps) => getPalette(props).grey;
