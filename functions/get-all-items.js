const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_items'))))
    .then((response) => {
      const itemsRef = response.data;
      // create new query out of items refs. http://bit.ly/2LG3MLg
      const getAllItemsDataQuery = itemsRef.map((ref) => {
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllItemsDataQuery).then((ret) => {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ret),
        };
      });
    })
    .catch((error) => {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error),
      };
    });
};
