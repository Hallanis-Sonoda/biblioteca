require('dotenv').config();

module.exports = {
    development: {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Admin123',
        database: 'biblioteca'
    },
    wrapIdentifier: (
        value,
        origImpl,
        queryContext
    ) => origImpl(convertToSnakeCase(value))}
};