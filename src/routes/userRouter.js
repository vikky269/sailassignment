import express from 'express'
import {signUpUser, loginUser} from '../controllers/userController.js'

const UserRouter = express.Router()

UserRouter.get("/",(req, res)=>{
    res.send("welcome to the home route")
})

UserRouter.post('/signup', signUpUser)
UserRouter.post('/login', loginUser )

export default UserRouter