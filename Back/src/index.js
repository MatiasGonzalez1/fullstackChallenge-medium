import express from "express"
import cors from "cors"
import morgan from "morgan"

const PORT = process.env.PORT || 3000;

const app = express()

app.use(cors)


app.listen(PORT, ()=>{
  console.log(`SERVIDOR LISTO EN EL PUERTO: ${PORT}`)
})