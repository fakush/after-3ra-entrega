import { Router } from 'express'
import authController from '../controllers/authController'
import passportLocal from '../middlewares/authenticationMiddleware'

const router = Router()

router.get('/login', passportLocal.authenticate('login'), (req, res) => {
    return res.status(200).json({msg: 'login successful'})
})
router.post('/signup', authController.userExists, passportLocal.authenticate('signup'), (req, res) => {
    return res.status(200).json({msg: 'signup successful'})
})
router.post('/logout', authController.logout)

export default router
