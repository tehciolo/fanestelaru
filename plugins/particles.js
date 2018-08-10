/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.NODE_ENV !== 'production') return
  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.beforeEach((to, from, next) => {
    console.log('before', from);

    next();
  });
  app.router.afterEach((to, from) => {
    console.log('after', to);
  });
}