import express from "express"
import cors from "cors"
import productoRoute from "./routes/productoRoute"
import pedidoRoute from "./routes/pedidoRoute"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando")
})

app.use("/productos", productoRoute)
app.use("/pedidos", pedidoRoute)

export default app