var sign = require('jsonwebtoken').sign;
var { URL } = require('url');

// POST request to the login form
// This should do all of the work to login and verify the user is valid
module.exports = (req, res) => {
  var { email, password } = req.body;

  console.log('Use these credentials to log the user in somewhere:', { email, password });

  // Validate email and password is a correct user, and get the user information

  // User being logged into ReadMe
  // FE at this point we're hardcoding in a user's name to mock sending a valid 
  //At this point we have a valid user, so we are sending them to readme
  var user = {
    name: email,
    email: email,
    
    // User's API Key
    apiKey: { user: 'testUser', pass: '123pass' },
    
    version: 1, // Required, if omited things can break unexpectedly

    // You can pass in any information here and use it in your documentation!
    // Full list of data that has special meaning in our API Explorer: https://docs.readme.com/docs/passing-data-to-jwt
  };

  var jwt = sign(user, process.env.JWT_SECRET);
  var url = new URL(process.env.HUB_URL);
  url.searchParams.set('auth_token', jwt);
  console.log('Redirecting to: ', url.toString());
  return res.redirect(url);
}
