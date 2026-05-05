import { Request, Response } from "express"
import { PedidoService } from "../services/pedidoService"
import { CrearPedidoDTO } from "../dto/pedidoDto"

export const pedidoController = {

    crearPedido: async (req: Request, res: Response) => {

        try {
            console.log("BODY", req.body)

            const data: CrearPedidoDTO = req.body

            if (!data.cliente || !data.carrito || data.carrito.length === 0) {
                return res.status(400).json({ error: "Datos incompletos" })
            }
            const result = await PedidoService.crearPedido(data)

            res.status(201).json(result)

        } catch (error: any) {
            console.error("ERROR", error)
            res.status(500).json({ error: error.messagge })
        }
    },

    obtenerPedido: async (req: Request, res: Response) => {
        
        try {
            const pedidos = await PedidoService.obtenerPedido()

            res.status(200).json(pedidos)

        } catch (error: any) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
}