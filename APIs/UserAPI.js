//Create mini-express app(Separate route)
import exp from 'express'
export const userApp = exp.Router()

//Create API (REST API Representational State Transfer)
//REST API: Resource based operaations
//testArray
let users=[]

//route to handle GET request of Client(http://localhost:6769/users)
userApp.get('/users',(req,res)=>{
    //reads all users and send res to client
    res.json({message:"all users",payload:users})
})

//route to handle POST request of Client 
userApp.post('/users',(req,res)=>{
    //get user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //send res
    res.json({message:"User Created."})
})

//route to handle PUT request of Client
userApp.put('/users',(req,res)=>{
    //get modified user from client {}
    let modifiedUser=req.body
    //get index of the modifiedUser
    let result=users.findIndex(userObj=> userObj.id===modifiedUser.id)
    //if user not found
    if(result===-1)
        return res.json({message:"User not found."})
    //update the user
    users.splice(result,1,modifiedUser)
    res.json({message:"User updated"})
})

//route to handle DELETE request of Client
userApp.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let idOfUrl=Number(req.params.id) // { id : '15'}
    //find the index
    let index=users.findIndex(obj=>obj.id===idOfUrl)
    //if user not found
    if(index===-1)
        return res.json({message:"User not found to delete"})
    //delete the user by index
    users.splice(index,1)
    //send response
    res.json({message:"User Deleted."})
})

userApp.get('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)
    let result=users.find(obj=>obj.id===idOfUrl)
    if(result===undefined)
        return res.json({message:"User not found"})
    res.json({message:"User Details",payload:result})
})