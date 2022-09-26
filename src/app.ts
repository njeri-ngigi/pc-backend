import express from 'express'
import config from './configs'
import database from './database'
import router from './routes'

const { PORT } = config
const app = express()

app.use(express.json())
app.use('/api/v1', router)

database.connectDatabase()

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`)
})
