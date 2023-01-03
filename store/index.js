import {
  deleteItem,
  createItem,
  updateItem,
  getAllItems,
} from '~/assets/js/api';

export const state = () => ({
  items: [],
  areItemsFetched: false,
});

export const getters = {
  getItemById: ({ items }) => (id) => {
    return items.find(todo => todo.id === id);
  },

  records ({ items }) {
    return items.filter(item => item.sections.includes('records'));
  },

  commercials ({ items }) {
    return items.filter(item => item.sections.includes('commercials'));
  },

  film ({ items }) {
    return items.filter(item => item.sections.includes('film'));
  },

  videoGames ({ items }) {
    return items.filter(item => item.sections.includes('video-games'));
  },
};

export const mutations = {
  setItems (state, items) {
    state.items = items;
  },

  setItemsFetched (state, status) {
    state.areItemsFetched = status;
  },

  deleteItem (state, id) {
    state.items = state.items.filter(item => item.id !== id);
  },
};

export const actions = {
  fetchItems ({ commit, state }) {
    if (state.areItemsFetched) { return Promise.resolve(); }

    return getAllItems()
      .then((items) => {
        commit('setItems', items);
        commit('setItemsFetched', true);
      })
      .catch((_) => {
        commit('setItems', []);
        commit('setItemsFetched', false);
      });
  },

  createItem ({ commit, dispatch }, item) {
    return createItem(item)
      .then(() => {
        commit('setItemsFetched', false);
        dispatch('fetchItems');
      });
  },

  updateItem ({ commit, dispatch }, { id, item }) {
    return updateItem(id, item)
      .then(() => {
        commit('setItemsFetched', false);
        dispatch('fetchItems');
      });
  },

  deleteItem ({ commit }, id) {
    return deleteItem(id)
      .then(() => {
        commit('deleteItem', id);
      });
  },
};
