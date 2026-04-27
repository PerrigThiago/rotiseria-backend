import { Request, Response } from "express"
import { PedidoService } from "../services/pedidoService"
import { CrearPedidoDTO } from "../dto/pedidoDto"

export const pedidoController = {
    crearPedido: async (req: Request, res: Response) => {
        try {
            const data: CrearPedidoDTO = req.body

            if(!data.cliente || !data.carrito || data.carrito.length === 0) {
                return res.status(400).json({ error: "Datos incompletos" })
            }
            const result = await PedidoService.crearPedido(data)

            res.status(201).json(result)

        } catch (error: any) {
            res.status(500).json({ error: error.messagge })
        }
    }
}