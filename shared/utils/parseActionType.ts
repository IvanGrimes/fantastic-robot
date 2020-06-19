export const parseActionType = (type: string) =>
  /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
