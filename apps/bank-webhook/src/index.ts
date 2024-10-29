import express from "express"; 

const app = express(); 

app.post("/commbankWebHook",(req,res) =>{
    const paymentInforamtion = {
        token: req.body.token, 
        userId: req.body.user_identifier, 
        amount: req.body.amount
    }; 
})