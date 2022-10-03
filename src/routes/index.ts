import express from 'express'
import { SignUpUser } from '../controllers/signup'
import { validateSignUpData } from '../middlewares/validators'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Hello World!')
})

router.post('/signup', validateSignUpData(), SignUpUser)

export default router
