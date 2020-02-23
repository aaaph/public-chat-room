# Public chat-room api

REST Node.js application using Koa framework where unauthenticated users can post messages in chat.
Application use postgres database.

## Installation

1. clone repository - `git clone https://github.com/riki4iki/public-chat-room`
2. install dependencies - `npm install`
3. create enviroments `.env` using `.example.env` template

##### run in development mode

for start server in development mode use nodemon

```bash
npm run .
```

##### run in production mode

1. build project - `npm run build-ts`
2. start server - `npm start`

## Endpoints

### POST

`/api/v1/message` - create new message in public chat - return 201 and created message

### input body

```
{
   author: string;
   email: string;
   text: string;
}
```

### GET

`/api/v1/message/list/:number` - return 10 messages of the `:number` page

`/api/v1/message/single/:id` - return message by `:id`(uuid)

### PUT

`/api/v1/message/single/:id` - update message by id and input body

### DELETE

`/api/v1/message/single/:id` - delete message by id

## Deployed

application has been deployed at [heroku](https://public-chat-room-api.herokuapp.com)
