import styled from 'styled-components';
import { ComponentType } from 'react';
import * as ui from '@modules/ui';

const { Loader: DefaultLoader } = ui

export const Loader = styled<ComponentType<ui.LoaderProps>>(DefaultLoader)`
  && {
    margin-top: 1px;
  }
`;
