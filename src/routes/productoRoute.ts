import { Router } from "express"
import { productosController } from "../controllers/productoController"
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware"

const router = Router()

// Público
router.get("/", productosController.obtenerProductos)

// Admin
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  productosController.crearProductos
)

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  productosController.actualizarProductos
)

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  productosController.eliminarProductos
)

export default router