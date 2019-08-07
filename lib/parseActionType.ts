import { RootAction } from '../redux/types';

export const parseRequestType = (
  actionType: RootAction['type']
): [string, string] => {
  const matches = /(.*)_(REQUEST|SUCCESS|CANCEL|FAIL)/.exec(actionType);

  if (matches) {
    const [, requestName, requestType] = matches;

    return [requestName, requestType];
  }

  return ['', ''];
};
