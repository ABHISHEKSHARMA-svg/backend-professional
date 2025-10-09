import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import
import userRouter from './routes/user.routes.js'

// routes declaration

app.use("/api/v1/users" , userRouter) // ye jo "api/v1/users" likha h prefix h (means set ho gya h ) ye kya krega ye jayega userRouter par vha dekhenga ki apne kisko call kiya h like /register ko ya /login to to aapka url aise bnega {http:localhost:8000/api/V1/users/register} ye sb ke upar apply hoga ye ya fir tumhara url bnega {http:localhost:8000/api/v1/users/Login}  bcs ye /users fix h iske aage hi route add hoga 

export {app}