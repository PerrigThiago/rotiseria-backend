import { Router } from "express"

import { configuracionController }
from "../controllers/configuracionController"

import {
  authMiddleware,
  roleMiddleware
} from "../middleware/authMiddleware"

const router = Router()

// pública
router.get(
  "/",
  configuracionController.getConfiguracion
)

// admin
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  configuracionController.updateConfiguracion
)

export default router