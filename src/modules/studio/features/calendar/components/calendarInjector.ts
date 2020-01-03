import { createInjector } from '@utils/createInjector';
import { Header } from './Header';
import { RangeNavigation } from './Header/RangeNavigation';
import { DirectionButton } from './Header/RangeNavigation/DirectionButton';
import { ViewRange } from './Header/RangeNavigation/ViewRange';
import { Controls } from './Header/Controls';
import { ClearSelected } from './Header/Controls/ClearSelected';
import { ViewColumn } from './Header/Controls/ViewColumn';
import { Body } from './Body';
import { WeekDay } from './Body/WeekDay';
import { Row } from './Body/Row';
import { Cell } from './Body/Row/Cell';

const injectables = {
  Header,
  RangeNavigation,
  DirectionButton,
  ViewRange,
  Controls,
  ClearSelected,
  ViewColumn,
  Body,
  WeekDay,
  Row,
  Cell,
};

export const { withInjector, useInjections } = createInjector<
  typeof injectables
>(injectables);
