import { ParsedUrlQuery } from 'querystring';
import React, { ComponentType } from 'react';
import { RootAction } from '@model/types';
import { botGuard } from '@modules/services/utils/botGuard';
import { useSelector } from 'react-redux';
import { getIsBot } from '@modules/ui/model/selectors';
import { changeIsBot } from '@modules/ui/model/actions';
import { NextPageContext } from '../../../../pages/_app';

type InitialProps = Promise<{ isBot: boolean }> | { isBot: boolean };

export const useWithSEO = () => {
  const isBot = useSelector(getIsBot);

  return { isBot };
};

export const withSEO = (
  actionsGetter: ({ query }: { query: ParsedUrlQuery }) => (() => RootAction)[]
) => (Component: ComponentType<any>) => {
  const WithSEO = ({ isBot, ...props }: { isBot: boolean }) => (
    <Component {...props} />
  );

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
