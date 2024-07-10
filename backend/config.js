const { Sequelize } = require('sequelize');
// require('dotenv').config();
// console.log('DBNAME:', process.env.DBNAME);
// console.log('USERNAME:', process.env.USERNAME);
// console.log('PASSWORD:', process.env.PASSWORD);
// console.log('SERVER:', process.env.SERVER);
const sequelize = new Sequelize('assignmentdb', 'root', '', {
    host: process.env.SERVER,
    dialect: 'mysql',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('database connect successfully.');
    } catch (error) {
        console.error('Unable to connect the database:', error);
    }
}

testConnection();

module.exports = sequelize;
