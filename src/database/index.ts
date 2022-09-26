import mongoose from 'mongoose'
import configs from '../configs'

const { DATABASE_URL } = configs

const connectDatabase = () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log('Database connected successfully')
    })
    .catch((err) => {
      console.log('Database connection failed')
      console.error(err)
    })
}

export default { connectDatabase }

// TODO: remove this commented code (adding it here incase I need to edit the db connection)
// .connect(DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// } as ConnectOptions)
