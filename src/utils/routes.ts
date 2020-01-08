export const routes = {
  main: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  passwordReset: '/password-reset',
  page: (number: number) => ({
    href: '/page/[number]',
    as: `/page/${number}`,
  }),
  studio: (id: string) => ({
    href: '/[studio]',
    as: `/${id}`,
  }),
  room: (studioId: string, roomId: string) => ({
    href: '/[studio]/[room]',
    as: `/${studioId}/${roomId}`,
  }),
  notFound: '/404',
};
