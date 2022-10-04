export default function ({ redirect, store, $toast }) {
  if (!store.state.auth.user) {
    // TODO: replace with bueify toast
    $toast && $toast.show('You\'ll need to login');
    return redirect('/');
  }
}
