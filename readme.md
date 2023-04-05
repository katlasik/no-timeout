# An example app with async HTTP flow

This is an Express.js app with two endpoints for creating and retrieving items. It uses internal in-memory story (plain array) to store items.

## Getting Started

To get started, clone this repository to your local machine and install the dependencies using `npm install`.
Once the dependencies are installed, you can start the app using `npm start`.

```sh
npm install
npm start
```

## Endpoints

Use a POST endpoint to start the creation of the item:

```
POST /item HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
"name": "New Item",
"description": "This is a new item"
}
```

Use GET endpoint to fetch the item:

```
GET /item/0 HTTP/1.1
Host: localhost:3000
```
