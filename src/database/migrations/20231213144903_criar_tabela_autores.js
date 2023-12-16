exports.up = knex => knex.schema.createTable('autores', table => {
    table.increments('id');
    table.string('nome').notNullable();
    table.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('autores')