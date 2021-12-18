module.exports = ({ env }) => ({
    url: 'https://ufiolkow-oms.herokuapp.com/',
    proxy: true,
    admin: {
        auth: {
          secret: env('ADMIN_JWT_SECRET', '23ae3722870fd6323ac3fbe4ffdd1e50'),
        },
      },
  });
   