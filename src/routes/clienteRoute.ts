import { Router } from "express";
import { clienteController } from "../controllers/clienteController";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.get(
    "/", 
    authMiddleware,
    roleMiddleware(["admin"]),
    clienteController.getCliente)

router.post(
    "/",
    authMiddleware,
    roleMiddleware(["admin"]),
    clienteController.createCliente)

    
router.put(
    "/:id", 
    authMiddleware,
    roleMiddleware(["admin"]),
    clienteController.updateCliente)

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware(["admin"]),
    clienteController.deleteCliente)

export default router