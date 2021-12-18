module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    admin: {
        auth: {
          secret: env('ADMIN_JWT_SECRET', '23ae3722870fd6323ac3fbe4ffdd1e50'),
        },
      },
  });
   