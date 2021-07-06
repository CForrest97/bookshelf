export const parseRouterString = (query?: string | string[]): string | null => {
  switch (typeof query) {
    case "undefined":
      return null;
    case "string":
      return query;
    default:
      return query[0] ?? null;
  }
};
