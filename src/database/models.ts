import { model } from 'mongoose'
import { UserSchema } from './schemas'

export const UserModel = model('User', UserSchema)
