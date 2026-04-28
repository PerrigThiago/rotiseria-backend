import { Request, Response } from "express";
import { clienteService } from "../services/clienteController";

export const clienteController = {
    getCliente: async (req: Request, res: Response) => {
        try {
            const data = await clienteService.getCliente()
            res.json(data)
        } catch (error: any) {
            res.status(500).json({ error: error.messagge })
        }
    },

    createCliente: async (req: Request, res: Response) => {
        try {
            const cliente = await clienteService.createCliente(req.body)
            res.status(201).json(cliente)
        } catch (error: any) {
            res.status(500).json({ error: error.messagge })
        }
    },

    updateCliente: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id)
            const cliente = await clienteService.updateCliente(id, req.body)
            res.json(cliente)
        } catch (error: any) {
            res.status(500).json({ error: error.messagge })
        }
    },

    deleteCliente: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id)
            await clienteService.deleteCliente(id)
            res.json({ mensaje: "Cliente eliminado" })
        } catch (error: any) {
            res.status(500).json({ error: error.messagge })
        } 
    }
}