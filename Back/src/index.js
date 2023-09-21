import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import postRoutes from "./routes/post.routes.js"
import authRoutes from "./routes/auth.routes.js"


const PORT = process.env.PORT || 3000;
const app = express()

//función para evitar error en politicas de cors
// app.use((req, res, next) => {
//   const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//        res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', true);
//   return next();
// });
app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true
}))


//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

//Routes
app.get("/api", (req,res)=>res.json({message: "Welcome to medium API"}) )
app.use("/api", postRoutes );
app.use("/api", authRoutes );

//Errors handler
app.use((req, res, next)=>{
  res.status(404).json({error:'Sorry! 404 not found', try:['/api/signin', '/api/post']})
});

app.listen(PORT, ()=>{
  console.log(`SERVIDOR LISTO EN EL PUERTO: ${PORT}`)
})