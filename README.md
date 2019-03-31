# Express & Knex.js Example

## Setup

```sh
cp .env.exampe .env # Then update the env variables

knex migrate:latest
knex seed:run
```

## Development

```sh
yarn dev
```

## Production

```sh
yarn start
```

## Endpoints

| Endpoint     | Method | Body            |
| ------------ | ------ | --------------- |
| `/`          | GET    | -               |
| `/users`     | GET    | -               |
| `/users`     | POST   | `{ name, age }` |
| `/users/:id` | GET    | -               |
| `/users/:id` | PUT    | `{ name, age }` |
| `/users/:id` | DELETE | -               |
