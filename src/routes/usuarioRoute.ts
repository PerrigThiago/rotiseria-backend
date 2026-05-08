import { Router } from "express"

import { usuarioController }
from "../controllers/usuarioController"

import {
  authMiddleware,
  roleMiddleware
} from "../middleware/authMiddleware"

const router = Router()

// solo admin
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  usuarioController.getUsuarios
)

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  usuarioController.createUsuario
)

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  usuarioController.deleteUsuario
)

export default router