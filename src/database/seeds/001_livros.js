exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('livros').del()
  await knex('livros').insert([
    
  ]);
};
