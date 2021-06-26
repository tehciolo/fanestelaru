const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  const data = JSON.parse(event.body);
  return client.query(q.Create(q.Collection('library'), { data }))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
