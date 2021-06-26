const faunadb = require('faunadb');
const q = faunadb.query;
const getPageRef = require('../assets/js/utils/get-page-ref');

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  const data = JSON.parse(event.body);
  return getPageRef(event.queryStringParameters.slug).then((ref) => {
    return client.query(q.Update(q.Ref(ref), { data }))
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
