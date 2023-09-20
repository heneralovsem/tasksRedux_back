const {Task} = require('../models/models')
const ApiError = require('../error/ApiError')
class TaskController {
    async create (req, res) {
        const {title, description, due_date} = req.body
        const newTask = await Task.create({title, description, due_date})
        return res.json(newTask)
    }
    async delete (req, res, next) {
        const {id} = req.params;

        const deletedTask = await Task.destroy({
                where: {id}, 
            });
        return res.json(deletedTask)
    }
    async editTask(req, res, next) {
        try {
            let {id, title, description, due_date} = req.body;
            
            const updatedTask = await Task.update(
                {
                    title,
                    description,
                    due_date

                },
                {
                    where: {id},
                    returning: true,
                }
            );
            return res.json(updatedTask)
        }
        catch (e) {
          next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const getTasks = await Task.findAll()
        return res.json(getTasks)
    }

}

module.exports = new TaskController()