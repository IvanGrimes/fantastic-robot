import styled from 'styled-components';
import { floatToFraction } from '@utils/floatToFraction';
import { ComponentType } from 'react';
import * as ui from '@modules/ui';

const { Loader: DefaultLoader } = ui

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${100 / floatToFraction(16.9)}%;
  width: 100%;
`;

export const Loader = styled<ComponentType<ui.LoaderProps>>(DefaultLoader)`
  && {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
