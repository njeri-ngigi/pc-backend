import { Response } from '../common/response'
import { UserModel } from '../database/models'

type user = {
  email: string
  password: string
}

const findUser = (email: string) => UserModel.findOne({ email })

export const createUser = async (user: user): Promise<Response> => {
  let message
  try {
    const userFound = await findUser(user.email)

    if (!userFound) {
      const data = await UserModel.create(user)
      return new Response({ status: 200, data })
    }
    message = 'user email already exists'
    return new Response({ status: 409, message, error: true })
  } catch (err) {
    message = 'creating user in the db failed'
    console.error(message, err)
    return new Response({ status: 500, message, error: true })
  }
}

// TODO: add tests for signup user
