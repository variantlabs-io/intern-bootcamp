import {IRouter, Router , Request , Response} from "express"  //doubt
import {User} from  "../types"
import {userData} from "../data"
let router :IRouter = Router()



// @route    POST api/auth/login
// @desc     Login
// @access   Public
router.post("/login" , (req:Request  , res : Response)=>{
    try {
        let {username , password} = req.body
        userData.map((user)=>{
            if(user.username === username && user.password === password){
                return res.status(200).json(user);
            }
        })
        return res.status(401).json({msg : "Invalid Credentials"})

    } catch (error:any) {  //doubt
        console.log(error.message)
    }
})



// @route    POST api/auth/signup
// @desc     SignUp new User
// @access   Public
router.post("/signup" ,  (req :Request , res: Response)=>{
    try {
        let { name ,  username ,  email ,  password ,  address  ,  phone } = req.body

        // check user if it already exists
        let existingUser = userData.find((user)=>user.email === email)
        if(existingUser){
            return res.status(404).json({msg: "User Already exists"})
        }
        let newUser: Partial<User> = {}
        //create new User
        newUser.name = name
        newUser.username = username
        newUser.email = email
        newUser.password = password
        newUser.address = address
        newUser.phone = phone

        // add new user to userData
        userData.push(newUser)
        return res.status(200).json({msg: "New user entry created" ,  data : newUser})

    } catch (error : any) {
        console.log(error.message)
    }
})

export default router