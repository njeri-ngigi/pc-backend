import bcrypt from 'bcrypt'
export const encodePassword = (plaintextPassword) =>
  bcrypt.hash(plaintextPassword, 10)

export const comparePassword = (plaintextPassword, hash) =>
  bcrypt.compare(plaintextPassword, hash)
