# ReadMe Custom Login Demo

## Setup

```sh
npm install
```

## Running

Grab JWT secret from "User Connect" => "Magic Login Link" in the ReadMe Dash.

```
JWT_SECRET=<your jwt secret> HUB_URL=<your hub url> npm start
```

Grab your api key from "Project Dashboard" => "API Key". 
Sync the example swagger file to any project:

```
npx rdme swagger openapi.json --key=<your api key>
```
