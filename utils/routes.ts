export const routes = {
  main: {
    route: '/',
    getRoute: () => ({ route: '/' }),
  },
  list: {
    route: '/page/[page]',
    getRoute: ({ page }: { page: number }) => ({
      route: '/page/[page]',
      as: `/page/${page}`,
    }),
  },
};
