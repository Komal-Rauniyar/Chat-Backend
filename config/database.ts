module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'chatlist'),  // Ensure this database exists
      user: env('DATABASE_USERNAME', 'komal'),    // Change if needed
      password: env('DATABASE_PASSWORD', 'komal@123'), // Ensure it's correct
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
