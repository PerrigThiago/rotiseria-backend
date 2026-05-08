import { Request, Response } from "express"
import { configuracionService } from "../services/configuracionService"

export const configuracionController = {

    async getConfiguracion(req: Request, res: Response) {

        try {

            const data = await configuracionService.getConfiguraciones()

            res.json(data)

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }
    },

    async updateConfiguracion(req: Request, res: Response) {

        try {

            const id = Number(req.params.id)

            const data = await configuracionService.updateConfiguracion(id, req.body)

            res.json(data)

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }
    }
}