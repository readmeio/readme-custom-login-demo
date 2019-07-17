var sign = require('jsonwebtoken').sign;
var { URL } = require('url');

module.exports = (req, res) => {
  var { email, password } = req.body;

  console.log('Use these credentials to log the user in somewhere:', { email, password });

  // User being logged into ReadMe
  var user = {
    name: email,
    email: email,
    
    // User's API Key
    apiKey: 'test_123sldoih',
    
    isAdmin: true, // Optional: This being true will bypass the docs access control
  };

  var jwt = sign(user, process.env.JWT_SECRET);
  var url = new URL(process.env.HUB_URL);
  url.searchParams.set('auth_token', jwt);

  console.log('Redirecting to: ', url.toString());
  return res.redirect(url);
}
