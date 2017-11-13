export default {
  PORT: process.env.PORT || 3001,
  DB_URL: 'mongodb://localhost/tweeter-development',
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'jwt_secret123',
};
