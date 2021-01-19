module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('MONGO_URL'),
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
