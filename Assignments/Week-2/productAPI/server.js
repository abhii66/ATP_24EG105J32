//HTTP Server creation
import exp from 'express' //express server contains http server, 
const app=exp()  //app is the name used to specially identify the application
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js';


//use body parser middleware (it extracts the data from req body)
app.use(exp.json())


//creating custom middleware
function middleware1(req,res,next){
    //send res from middleware
    //res.json({message:"message from middleware"}) //middleware can also send response.
    //next is used to forwards the request to next middleware(if theres any) or to router.
    console.log("from middleware1")
    next()
}

function middleware2(req,res,next){
    //send res from middleware
    //res.json({message:"message from middleware"}) //middleware can also send response.
    //next is used to forwards the request to next middleware(if theres any) or to router.
    console.log("from middleware2.")
    next()
}

app.use(middleware1) //"use" is used to call middleware functions.
app.use(middleware2)
//forward req to userApi if the path starts with /user-api
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//setting port number to http server
const port=6769;
//port number is required to listen client requests
app.listen(port, ()=> console.log(`server listening to port ${port}...`)) // used to assign port number to http server



