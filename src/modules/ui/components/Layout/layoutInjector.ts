import { createInjector } from '@utils/createInjector';
import { Header as HeaderComponent } from './Header';
import { HeaderBar } from './BaseHeader/HeaderBar';
import { BottomNavigation as BottomNavigationComponent } from './BottomNavigation';

const injectables = {
  Header: HeaderComponent,
  HeaderBar,
  BottomNavigation: BottomNavigationComponent,
};

export const { withInjector, useInjections } = createInjector<
  typeof injectables
>(injectables);
