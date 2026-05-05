import { Router } from "express"
import { pedidoController } from "../controllers/pedidoController"
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware"

const router = Router()

// 🔓 Cliente (sin login)
router.post("/", pedidoController.crearPedido)

// 🔒 Admin / Empleado
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "empleado"]),
  pedidoController.obtenerPedido
)

export default router