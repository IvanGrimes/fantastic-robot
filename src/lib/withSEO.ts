import { NextComponentType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { RootAction } from '../model/types';
import { NextPageContext } from '../../pages/_app';

const BOTS_USER_AGENTS = ['googlebot', 'mediapartners-google', 'yandexbot'];

export const withSEO = (
  actionsGetter: ({ query }: { query: ParsedUrlQuery }) => (() => RootAction)[]
) => (Component: NextComponentType) => {
  Component.getInitialProps = ({ req, query, store }: NextPageContext) => {
    if (req) {
      const actions = actionsGetter({ query });
      const userAgent = req.rawHeaders.reduce((acc, item, index, array) => {
        if (item === 'user-agent') {
          return array[index + 1].toLowerCase();
        }

        return acc;
      }, '');

      if (BOTS_USER_AGENTS.some(ua => userAgent.includes(ua))) {
        actions.forEach(action => store.dispatch(action()));
      }
    }

    return {};
  };

  return Component;
};
