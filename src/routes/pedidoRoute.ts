import { Router } from "express";
import { pedidoController } from "../controllers/pedidoController";

const router = Router()

router.post("/", pedidoController.crearPedido)

export default router