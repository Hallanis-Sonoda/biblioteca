const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {

            const results = await knex('autores');
            return res.status(200).send(results)

        } catch (error) {
            next(error);
        }  
    },
    async indexById(req, res, next) {
        try {

            const id = req.params;

            const results = await knex('autores').where(id)

            return res.status(200).send(results) 

        } catch (error) {
            next(error);
        }
    },
    async create(req, res, next) {
        try {
            const { nome } = req.body;
            
            await knex('autores').insert({
                nome
            })

            return res.status(200).json({meessage: 'Autor criado com sucesso!'})
        } catch (error) {
            next(error)
        }
        
    },
    async update(req, res, next) {
        try {

            const { nome } = req.body;
            const { id } = req.params;

            
            await knex('autores')
            .update({ nome })
            .where({ id })

            return res.status(200).json({message: 'Autor atualizado com sucesso!'})

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('autores')
            .where({ id })
            .del()

            return res.json({message: 'Autor deletado com suceso!'})
        } catch (error) {
            next(error) 
        }
    }
}