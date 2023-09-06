import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"

import postRoutes from "./routes/post.routes.js"
import authRoutes from "./routes/auth.routes.js"


const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use("/api", postRoutes );
app.use("/api", authRoutes );


app.use((req, res, next)=>{
  res.status(404).json({error:'Sorry! 404 not found', try:['/api/signin', '/api/posts']})
});

app.listen(PORT, ()=>{
  console.log(`SERVIDOR LISTO EN EL PUERTO: ${PORT}`)
})