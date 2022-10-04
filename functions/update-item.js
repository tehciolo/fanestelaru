const faunadb = require('faunadb');
const getItemId = require('../assets/js/utils/get-item-id');
const q = faunadb.query;

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  const data = JSON.parse(event.body);
  const id = getItemId(event.path);
  return client.query(q.Update(q.Ref(q.Collection('library'), id), { data }))
    .then((response) => {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      };
    }).catch((error) => {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error),
      };
    });
};
