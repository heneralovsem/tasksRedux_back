const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    due_date: {type: DataTypes.STRING, allowNull: false},
})
const CompletedTask = sequelize.define('completed_task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    due_date: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
    Task,
    CompletedTask
    
}


