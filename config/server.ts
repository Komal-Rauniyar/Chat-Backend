export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://your-backend-url.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', ['8c793abc413fdd13699fd77093d839045654f12efa50af434c5f91eb230190cb', '4ae709229610a0f150b28ee4fe795378832a5685012d1cbba859a60759262e2e']),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6a84e3928be79d4e1a118565015747c42526e83d85f51b38e6cd8c4001405429'),
    },
  },
});
