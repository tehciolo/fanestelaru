/* eslint-disable no-tabs */
import axios from 'axios';
import { isSSR } from '../utils/helpers';

const http = axios.create({
  baseURL: process.env.FUNCTIONS_SERVER_PORT
    ? 'http://localhost:' + process.env.FUNCTIONS_SERVER_PORT + '/'
    : '',
});

export const getAllItems = () => {
  return http
    .get('/.netlify/functions/get-all-items')
    .then(response => withId(response.data))
    .catch(logIfOnServer);
};

export const getItem = (id) => {
  return http
    .get(`/.netlify/functions/get-item/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch(logIfOnServer);
};

export const createItem = (data) => {
  return http
    .post('/.netlify/functions/create-item', data)
    .then((response) => {
      return response.data;
    })
    .catch(logIfOnServer);
};

export const updateItem = (id, data) => {
  return http
    .put(`/.netlify/functions/update-item/${id}`, data)
    .catch(logIfOnServer);
};

export const deleteItem = (id) => {
  return http
    .delete(`/.netlify/functions/delete-item/${id}`)
    .catch(logIfOnServer);
};

function withId (items) {
  return items.map(item => ({
    ...item.data,
    id: item.ref['@ref'].id,
  }));
}

function logIfOnServer (error) {
  if (isSSR()) {
    console.error(error); // eslint-disable-line
  }
}
