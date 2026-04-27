import { Router } from "express"
import { productosController } from "../controllers/productoController"

const router = Router()

router.get("/", productosController.obtenerProductos)

router.post("/", productosController.crearProductos)

router.put("/:id", productosController.actualizarProductos)

router.delete("/:id", productosController.eliminarProductos)

export default router