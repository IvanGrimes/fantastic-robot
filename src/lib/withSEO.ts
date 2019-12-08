import { ParsedUrlQuery } from 'querystring';
import { ComponentType } from 'react';
import { RootAction } from '../model/types';
import { NextPageContext } from '../../pages/_app';
import { botGuard } from './botGuard';

type InitialProps = Promise<{ isBot: boolean }> | { isBot: boolean };

export const withSEO = (
  actionsGetter: ({ query }: { query: ParsedUrlQuery }) => (() => RootAction)[]
) => (
  Component: ComponentType<any> & {
    getInitialProps?(ctx: NextPageContext): InitialProps;
  }
) => {
  Component.getInitialProps = ({ req, query, store }) => {
    if (req) {
      const actions = actionsGetter({ query });

      if (botGuard(req)) {
        actions.forEach(action => store.dispatch(action()));

        return { isBot: true };
      }
    }

    return { isBot: false };
  };

  return Component;
};
