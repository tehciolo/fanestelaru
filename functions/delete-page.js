const faunadb = require('faunadb');
const getPageRef = require('../assets/js/utils/get-page-ref');
const q = faunadb.query;

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  return getPageRef(event.queryStringParameters.slug).then((ref) => {
    return client.query(q.Delete(q.Ref(ref)))
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
  });
};
