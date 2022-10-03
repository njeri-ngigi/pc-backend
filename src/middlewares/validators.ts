import { check } from 'express-validator'

// data: name, email, password

export const validateSignUpData = () => {
  return [
    check('email', 'invalid email address').trim().isEmail(),
    check('password')
      .isStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
      .withMessage(
        'password length must be greater than 10, contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
      )
  ]
}
