import 'particles.js';

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.NODE_ENV !== 'production') return
  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.beforeEach((to, from, next) => {
    if (window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window['pJSDom'] = [];
    }

    next();
  });
  app.router.afterEach((to, from) => {
    particlesJS.load('particles', '/particles.json');
  });
}