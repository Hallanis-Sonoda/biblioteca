const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {

            const query = knex.select('*').from('livros').join('autores', {'autores.id': 'livros.autor_id'})

             const result = await query

            return res.status(200).send(result) 

        } catch (error) {
            next(error);
        }  
    },
    async indexById(req, res, next) {
        try {

            const {id} = req.params;

            const results = await knex('livros').where({'livros.id': id}).join('autores', {'autores.id': 'livros.autor_id'})

            return res.status(200).send(results)

        } catch (error) {
            next(error);
        }
    },
    async create(req, res, next) {
        try {
            const { titulo, data_lancamento, disponivel, autor_id } = req.body;
            
            await knex('livros').insert({
                titulo, data_lancamento, disponivel, autor_id
            })

            return res.status(200).json({message: 'Livro criado com sucesso!'})
        } catch (error) {
            next(error);
        }
        
    },
    async update(req, res, next) {
        try {

            const { titulo, preco, data_lancamento, disponivel } = req.body;
            const { id } = req.params;

            
            await knex('livros')
            .update({ titulo, preco, data_lancamento, disponivel })
            .where({ id })

            return res.status(200).json({message: 'Livro atualizado com sucesso!'})

        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('livros')
            .where({ id })
            .del()

            return res.json({message: 'Livro deletado com sucesso!'})
        } catch (error) {
            next(error);
        }
    }
}