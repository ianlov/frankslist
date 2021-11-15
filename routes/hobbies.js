import { Router } from 'express'
import * as controllers from '../controllers/hobbies.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/hobbies', controllers.getHobbies)
router.get('/hobbies/:id', controllers.getHobbies)
router.post('/hobbies', restrict, controllers.createHobby)
router.put('/hobbies/:id', restrict, controllers.updateHobby)
router.delete('/hobbies/:id', restrict, controllers.deleteHobby)

export default router
