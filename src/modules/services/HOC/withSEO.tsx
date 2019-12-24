import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { RootAction } from '@model/types';
import { botGuard } from '@modules/services/utils/botGuard';
import { useSelector } from 'react-redux';
import { getIsBot } from '@modules/ui/model/selectors';
import { changeIsBot } from '@modules/ui/model/actions';
import { NextComponentType } from 'next';
import { NextPageContext } from '../../../../pages/_app';

type ComponentProps = { isBot: boolean };

type InitialProps = Promise<ComponentProps> | ComponentProps;

export const useWithSEO = () => {
  const isBot = useSelector(getIsBot);

  return { isBot };
};

export const withSEO = <P extends ComponentProps>(
  actionsGetter: ({ query }: { query: ParsedUrlQuery }) => (() => RootAction)[]
) => (Component: NextComponentType<NextPageContext, any, P>) => {
  const WithSEO = (props: P) => <Component {...props} />;

  WithSEO.getInitialProps = ({
    req,
    query,
    store,
  }: NextPageContext): InitialProps => {
    if (req) {
      const actions = actionsGetter({ query });

      if (botGuard(req)) {
        actions.forEach(action => store.dispatch(action()));
        store.dispatch(changeIsBot(true));

        return { isBot: true };
      }
    }

    return { isBot: false };
  };

  return WithSEO;
};
