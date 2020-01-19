import styled from 'styled-components';
import { ComponentType } from 'react';
import { floatToFraction } from '@utils/floatToFraction';
import * as ui from '@modules/ui';

const { Loader: DefaultLoader } = ui

export const Wrapper = styled.div`
  && {
    display: flex;
    width: 100%;
    position: relative;
    padding-bottom: ${100 / floatToFraction(16.9)}%;
  }
`;

export const Loader = styled<ComponentType<ui.LoaderProps>>(DefaultLoader)`
  && {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
