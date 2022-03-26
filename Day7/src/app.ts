import express ,  {Application} from  "express"
import authRouter from "./routes/auth"
let app:Application = express()


//middleware : to parse the JSON
app.use(express.json())

//routes
app.use("/api/auth" , authRouter)

const PORT = 5000
app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`)
})