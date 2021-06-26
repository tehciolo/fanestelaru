const faunadb = require('faunadb');
const q = faunadb.query;

module.exports = (queryParam) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  return client.query(q.Paginate(q.Documents(q.Collection('pages'))))
    .then((response) => {
      const itemsRef = response.data;
      const getAllItemsDataQuery = itemsRef.map((ref) => {
        return q.Get(ref);
      });

      return client.query(
        q.Filter(
          getAllItemsDataQuery,
          q.Lambda(
            'item',
            q.Equals(
              queryParam,
              q.Select(['data', 'slug'], q.Var('item')),
            ),
          ),
        ),
      )
        .then((response) => {
          return response[0].ref;
        });
    }).catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
