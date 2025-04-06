import express from "express";
import cookieParser from "cookie-parser";

const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use()



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running at port${PORT}`);
})