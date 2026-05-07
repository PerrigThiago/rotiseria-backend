import { Router } from "express"

import { categoriaController } from "../controllers/categoriaController"

import {
  authMiddleware,
  roleMiddleware
} from "../middleware/authMiddleware"

const router = Router()

// públicas
router.get("/", categoriaController.getCategoria)

// admin
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  categoriaController.createCategoria
)

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  categoriaController.updateCategoria
)

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  categoriaController.deleteCategoria
)

export default router