import express from "express"
import cors from "cors"

import productoRoute from "./routes/productoRoute"
import pedidoRoute from "./routes/pedidoRoute"
import clienteRoute from "./routes/clienteRoute"
import authRoute from "./routes/authRoute"
import categoriaRoute from "./routes/categoriaRoute"
import configuracionRoute from "./routes/configuracionRoute"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando")
})

app.use("/auth", authRoute)

app.use("/productos", productoRoute)
app.use("/pedidos", pedidoRoute)
app.use("/clientes", clienteRoute)
app.use("/categorias", categoriaRoute)
app.use("/configuracion", configuracionRoute)

export default app