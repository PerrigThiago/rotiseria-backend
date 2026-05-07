import { Request, Response } from "express"
import { categoriaService } from "../services/categoriaService"

export const categoriaController = {

    async getCategoria(req: Request, res: Response) {

        try {

            const data = await categoriaService.getCategorias()

            res.json(data)

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }
    },

    async createCategoria(req: Request, res: Response) {

        try {

            const data = await categoriaService.createCategoria(req.body)

            res.status(201).json(data)

        } catch (error: any) {

            res.status(500).json({
                error: error.message
            })
        }
    },

    async updateCategoria(req: Request, res: Response) {

        try {

            const id = Number(req.params.id)

            const data = await categoriaService.updateCategoria(id, req.body)

            res.json(data)

        } catch (error: any) {

            res.status(500).json({ error: error.message })
        }
    },

    async deleteCategoria(req: Request, res: Response) {

        try {

            const id = Number(req.params.id)

            const data = await categoriaService.deleteCategoria(id)

            res.json({ message: "Categoria eliminada " })

        } catch (error: any) {
            
            res.status(500).json({ error: error.message })
        }
    }
}