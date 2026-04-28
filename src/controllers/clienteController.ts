import { Request, Response } from "express";
import { clienteService } from "../services/clienteController";

export const clienteController = {
    async getCliente(req: Request, res: Response) {
        try {
            const cliente = await clienteService.getCliente()
            return res.status(200).json(cliente)

        } catch (error: any) {
            console.error("Error getClientes:", error)
            return res.status(500).json({ error: "Error al obtener clientes" })
        }
    },

    async createCliente(req: Request, res: Response) {
        try {
            const { nombre, telefono, direccion } = req.body
            
            if (!nombre || !telefono || !direccion) {
                return res.status(400).json({error: "Todos los campos son obligatorios"})
            }

            const cliente = await clienteService.createCliente({ nombre, telefono, direccion })
            
            res.status(201).json(cliente)

        } catch (error: any) {
            console.error("Error createCliente", error)
            return res.status(500).json({ error: error.messagge })
        }
    },

    async updateCliente(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            
            if (!id) {
                return res.status(400).json({ error: "ID inváilido" })
            }

            const { nombre, telefono, direccion } = req.body

            const cliente = await clienteService.updateCliente(id, {nombre, telefono, direccion})

            return res.status(200).json(cliente)

        } catch (error: any) {
            console.error("Error updateCliente", error)
            return res.status(500).json({ error: error.messagge })
        }
    },

    async deleteCliente(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            if (!id) {
                return res.status(400).json({ error: "ID inválido" })
            }

            await clienteService.deleteCliente(id)

            return res.status(200).json({ message: "Cliente eliminado correctamente" })

        } catch (error: any) {
            console.error("Error deleteCliente", error)
            res.status(500).json({ error: error.messagge })
        } 
    }
}