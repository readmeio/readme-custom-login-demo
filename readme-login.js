var sign = require('jsonwebtoken').sign;
var { URL } = require('url');

// POST request to the login form
// This should do all of the work to login and verify the user is valid
module.exports = (req, res) => {
  var { email, password } = req.body;

  console.log('Use these credentials to log the user in somewhere:', { email, password });

  // Validate email and password is a correct user, and get the user information

  // User being logged into ReadMe
  // At this point we have a valid user, so we are sending them to readme
  var user = {
    name: email,
    email: email,
    
    // User's API Key
    apiKey: 'test_123sldoih',
    
    isAdmin: true, // Optional: This being true will bypass the docs access control

    // You can pass in any information here and use it in your documentation!
  };

  var jwt = sign(user, process.env.JWT_SECRET);
  var url = new URL(process.env.HUB_URL);
  url.searchParams.set('auth_token', jwt);

  console.log('Redirecting to: ', url.toString());
  return res.redirect(url);
}
