require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const Knex = require('knex')

const app = express()
const knex = Knex(require('./knexfile'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello'))

app.get('/users', async (req, res) => {
  const users = await knex('users').select()

  res.json({ users })
})

app.post('/users', async (req, res) => {
  const user = await knex('users').insert(req.body)

  res.json({ user })
})

app.get('/users/:id', async (req, res) => {
  const user = await knex('users')
    .select()
    .where({ id: req.params.id })

  res.json({ user })
})

app.put('/users/:id', async (req, res) => {
  const user = await knex('users')
    .where({ id: req.params.id })
    .update(req.body)

  res.json({ user })
})

app.delete('/users/:id', async (req, res) => {
  await knex('users')
    .where({ id: req.params.id })
    .del(req.body)

  res.json({})
})

app.listen(process.env.PORT, () => console.log(`:${process.env.PORT}`))
