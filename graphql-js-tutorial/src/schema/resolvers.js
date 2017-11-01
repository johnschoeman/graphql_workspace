const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The best query language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome graphql client'
  },
];

module.exports = {
  Query: {
    allLinks: () => links,
  },
};