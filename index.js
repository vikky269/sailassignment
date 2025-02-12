import express, {json} from 'express'
import { configDotenv } from 'dotenv'
import connectToDb from './src/config/db.js'
import bookRouter from './src/routes/bookRouter.js'
import orphanageRouter from './src/routes/orphanageRouter.js'
import cinemaRouter from './src/routes/cinemaRouter.js'
import workOutRouter from './src/routes/workoutRouter.js'
import UserRouter from './src/routes/userRouter.js'

configDotenv()

const app = express()

app.use(json())

connectToDb()
app.use("/api/v1/books", bookRouter)
app.use("/api/v1/orphanage", orphanageRouter)
app.use("/api/v1/cinema", cinemaRouter)
app.use("/api/v1/workout", workOutRouter)
app.use("/api/users", UserRouter)
const port = process.env.PORT

app.listen(port, ()=> console.log(`App is starting on port ${port}`))