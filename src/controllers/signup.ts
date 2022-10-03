import { validationResult } from 'express-validator'
import { createUser } from '../services/user'
import { encodePassword } from '../utils/encoder'

export const SignUpUser = async (req, res) => {
  const errors = validationResult(req)
  console.log(errors)
  if (!errors.isEmpty()) return res.status(400).send({ errors: errors.array() })

  const { email, password } = req.body
  const hashedPassword = await encodePassword(password)

  const { status, ...data } = await createUser({
    email,
    password: hashedPassword
  })

  return res.status(status).send(data)
}
