export const parseRequestType = (actionType: string): [string, string] => {
  const matches = /(.*)_(REQUEST|SUCCESS|CANCEL|FAIL)/.exec(actionType);

  if (matches) {
    const [, requestName, requestType] = matches;

    return [requestName, requestType];
  }

  return ['', ''];
};
