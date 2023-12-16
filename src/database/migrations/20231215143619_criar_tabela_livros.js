exports.up = knex => knex.schema.createTable('livros', table => {
    table.increments('id');
    table.string('titulo').notNullable();
    table.integer('data_lancamento').notNullable();
    table.boolean('disponivel').notNullable();
    table.integer('autor_id').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.foreign('autor_id').references('id').inTable('autores')
  })


exports.down = knex => knex.schema.dropTable('livros')

