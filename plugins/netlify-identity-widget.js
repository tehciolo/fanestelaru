import netlifyIdentity from 'netlify-identity-widget';

export default (context, inject) => {
  inject('netlifyIdentity', netlifyIdentity);
  return context.store.dispatch('auth/init', context);
};
