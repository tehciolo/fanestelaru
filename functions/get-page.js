const faunadb = require('faunadb');
const q = faunadb.query;
const getPageRef = require('../assets/js/utils/get-page-ref');

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  return getPageRef(event.queryStringParameters.slug).then((ref) => {
    return client.query(q.Get(q.Ref(ref)))
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
  });
};
