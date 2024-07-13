import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel1 from './models/employee.js'

const app =express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://prudhvee:Sruthi%401@prudhveeloginsignup.gv1yxec.mongodb.net/?retryWrites=true&w=majority&appName=PrudhveeLoginSignUp');
app.post('/login', (req, res)=>{
    const {email, password}=req.body;
    EmployeeModel1.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("incorrect password")
            }
        }
    })

})


app.post('/signup', (req, res)=>{
    EmployeeModel1.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})
app.listen(3000, ()=>{
    console.log("port connected to 3000")
})


