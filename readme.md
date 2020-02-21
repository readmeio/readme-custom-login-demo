# ReadMe Custom Login Demo

Custom login lets you create interactive API docs (an "API Explorer") so your users can log into the docs.
 can also configure it so they see working code examples that contain their personal API key that they can try out from within the docs.   

## Setup
To setup:

- Clone this repo
- In the command line at the directory containing the cloned repo, run:

```sh
npm install
```

## Running
This repo has a sample login server. To get the server up and running:

- Grab your JWT secret from "Configuration" => "Custom Login" in ReadMe Dash of your docs project. (dash.readme.io/project/`yourProject`/custom-login)

- In the command line at the cloned repo directory, create environmental variables and start the server:
```
JWT_SECRET="<your jwt secret>" HUB_URL="<your hub url>" npm start
```
You should see the following command line output:
```
> custom-login-demo@0.0.0 start <your local repo path>
> node-dev ./bin/www

Listening on http://localhost:3000

```

- Leave this terminal window open and open a new terminal window for the following steps

## Sync example API docs to your project
You can generate example API docs (an "API Explorer") from the example in this repo, then you can test out the login flow from within those docs:  

- Grab your api key from the docs project where you want to test custom login. "Configuration" => "API Key" (dash.readme.io/project/`yourProject`/api-key)
- To sync the example API spec in this repo (`openapi.json`),  run in the command line at the cloned repo directory:

```
npx rdme swagger openapi.json --key="<your api key>"
```
- Follow the command-line prompts to select a version for your API reference and update or create new API docs.
