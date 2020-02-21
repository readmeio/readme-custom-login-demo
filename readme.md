# ReadMe Custom Login Demo

## Setup

```sh
npm install
```

## Running

Grab JWT secret from "Configuration" => "Custom Login" in the ReadMe Dash. (dash.readme.io/project/`yourProject`/custom-login)

```
JWT_SECRET=<your jwt secret> HUB_URL=<your hub url> npm start
```

## Sync an example swagger file to your project
Grab your api key from "Project Dashboard" => "API Key". 
Sync the example swagger file to any project:

```
npx rdme swagger openapi.json --key=<your api key>
```
