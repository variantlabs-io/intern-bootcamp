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
        let user = userData.filter((user)=>user.username === username && user.password === password)
        if(user.length === 0){
            return res.status(404).json({msg : "Invalid Credentials"})
        }
        return res.status(200).json(user);
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
            return res.status(409).json({msg: "User Already exists"})
        }

        let newUser: User = {}
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