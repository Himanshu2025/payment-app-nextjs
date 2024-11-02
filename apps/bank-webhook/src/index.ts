import express from "express"; 
import db from "@repo/db/client"
const app = express(); 

app.post("/commbankWebHook",async(req,res) =>{
    // checking if the request actually came from commbank , using a webhook secret here
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string;
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // transaction 
    try { 
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                }, 
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }), 
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success", 
                }
            })
        ]); 

        res.json({
            message: "Captured"
        })
    }catch(e) {
        console.error(e); 
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
  
})