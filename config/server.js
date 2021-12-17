module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:'https://ufiolkow-oms.herokuapp.com/',
  proxy: true,
  admin: {
    url:'/',
    serverAdminPanel:false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '23ae3722870fd6323ac3fbe4ffdd1e50'),
    },
  },
});
