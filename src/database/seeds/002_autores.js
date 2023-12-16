exports.seed = async function(knex) {
  
  await knex('autores').del()
  await knex('autores').insert([

  ]);
};
