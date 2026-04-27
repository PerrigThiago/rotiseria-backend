import express from "express"
import cors from "cors"
import productoRoutes from "./routes/productoRoute"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando")
})

app.use("/productos", productoRoutes)

export default app