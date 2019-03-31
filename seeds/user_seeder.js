exports.seed = (knex, Promise) => {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        { id: 1, name: 'John', age: 50 },
        { id: 2, name: 'Jen', age: 40 },
        { id: 3, name: 'Jan', age: 30 }
      ])
    })
}
