const Router = require('express')
const router = new Router()
const TaskController = require('../controllers/TaskController')
const completedTaskController = require('../controllers/completedTaskController')

router.post('/', TaskController.create)
router.post('/completed', completedTaskController.create)
router.put('/:id', TaskController.editTask)
router.delete('/:id', TaskController.delete)
router.delete('/completed/:id', completedTaskController.delete)
router.get('/', TaskController.getAll)
router.get('/completed', completedTaskController.getAll)

module.exports = router