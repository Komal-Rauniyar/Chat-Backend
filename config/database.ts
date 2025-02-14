module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cunjmhq3esus73cj6r90-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'chatlist'),  // Ensure this database exists
      user: env('DATABASE_USERNAME', 'komal'),    // Change if needed
      password: env('DATABASE_PASSWORD', 'komal@123'), // Ensure it's correct
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
