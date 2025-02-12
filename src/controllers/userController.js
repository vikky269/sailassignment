import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'

const Users = userModel

 export const signUpUser = async (req, res)=> {
    try {
         let {firstname, lastname, password, phonenumber, email} = req.body
          const hashedPassword = await bcrypt.hash(password, 10)
          let newUser = new Users({firstname, lastname, password:hashedPassword, phonenumber, email })
          await newUser.save()
          res.send("user saved succesfully")
    } catch (error) {
        res.send(err)
    }
}

export const loginUser = async (req, res) => {
    try {
        let {password , email} = req.body
        let user = await Users.findOne({email})
        if (user) {
            let match = await bcrypt.compare(password, user.password)
            if (match) {
             return res.status(200).json({message: "user Logged in successfully"})
            } else {
                res.send("Incorrect username or password")
            }
        } 
    } catch (error) {
        
    }
}