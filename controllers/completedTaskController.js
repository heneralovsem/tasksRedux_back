const {CompletedTask} = require('../models/models')
const ApiError = require('../error/ApiError')
class CompletedTaskController {
    async create (req, res) {
        const {title, description, due_date} = req.body
        const newTask = await CompletedTask.create({title, description, due_date})
        return res.json(newTask)
    }
    async delete (req, res, next) {
        const {id} = req.params;

        const deletedTask = await CompletedTask.destroy({
                where: {id}, 
            });
        return res.json(deletedTask)
    }
    

    async getAll (req, res) {
        const getTasks = await CompletedTask.findAll()
        return res.json(getTasks)
    }

}

module.exports = new CompletedTaskController()