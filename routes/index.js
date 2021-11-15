import { Router } from 'express'
import hobbiesRoutes from './hobbies.js'
import usersRoutes from './user.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', hobbiesRoutes)

export default router
