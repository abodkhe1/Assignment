const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const employee = sequelize.define('employee', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


(async () => {
    await employee.sync();
    console.log('employee table created');
})();

module.exports = employee;
