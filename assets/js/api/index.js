/* eslint-disable no-tabs */
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.FUNCTIONS_SERVER_PORT
    ? 'http://localhost:' + process.env.FUNCTIONS_SERVER_PORT + '/'
    : '',
});

export const getAllItems = () => {
  return http
    .get('/.netlify/functions/get-all-items')
    .then((response) => {
      return response;
    });
};

export const getItem = (id) => {
  return http.get(`/.netlify/functions/get-item/${id}`).then((response) => {
    return response.data.data;
  });
};

export const createItem = (data) => {
  return http.post('/.netlify/functions/create-item', data).then((response) => {
    return response.data;
  });
};

export const updateItem = (id, data) => {
  return http.put(`/.netlify/functions/update-item/${id}`, data);
};

export const deleteItem = (id) => {
  return http.delete(`/.netlify/functions/delete-item/${id}`);
};

export const getRecords = () => {
  return getAllItems().then(({ data: items }) => {
    return items
      .map(item => ({
        ...item.data,
        id: item.ref['@ref'].id,
      }))
      .filter(item => item.sections.includes('records'));
  });
};

export const getVideoGames = () => {
  return getAllItems().then((items) => {
    return items
      .map(item => item.data)
      .filter(item => item.sections.includes('video-games'));
  });
};

export const getFilm = () => {
  return getAllItems().then((items) => {
    return items
      .map(item => item.data)
      .filter(item => item.sections.includes('film'));
  });
};

export const getCommercials = () => {
  return getAllItems().then((items) => {
    return items
      .map(item => item.data)
      .filter(item => item.sections.includes('commercials'));
  });
};
