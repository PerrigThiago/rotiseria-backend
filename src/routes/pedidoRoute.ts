import { Router } from "express"
import { pedidoController } from "../controllers/pedidoController"
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware"

const router = Router()

router.post("/", pedidoController.crearPedido)

router.get(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "empleado"]),
  pedidoController.obtenerPedido
)

router.put(
  "/:id/estado",

  authMiddleware,
  roleMiddleware(["admin", "empleado"]),

  pedidoController.updateEstado
)

export default router