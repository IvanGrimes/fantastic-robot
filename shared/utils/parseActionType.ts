export const parseActionType = (type: string) =>
  /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(type);
