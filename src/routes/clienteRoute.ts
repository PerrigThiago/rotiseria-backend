import { Router } from "express";
import { clienteService } from "../services/clienteController";
import { clienteController } from "../controllers/clienteController";

const router = Router()

router.get("/", clienteController.getCliente)
router.post("/", clienteController.createCliente)
router.put("/:id", clienteController.updateCliente)
router.delete("/:id", clienteController.deleteCliente)

export default router