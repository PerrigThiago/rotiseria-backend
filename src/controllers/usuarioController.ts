import { Request, Response } from "express"
import { usuarioService } from "../services/usuarioService"

export const usuarioController = {

  async getUsuarios(req: Request, res: Response) {

    try {

      const data =
        await usuarioService.getUsuarios()

      res.json(data)

    } catch (error: any) {

      res.status(500).json({
        error: error.message
      })
    }
  },

  async createUsuario(req: Request, res: Response) {

    try {

      const data =
        await usuarioService.createUsuario(req.body)

      res.status(201).json(data)

    } catch (error: any) {

      res.status(500).json({
        error: error.message
      })
    }
  },

  async deleteUsuario(req: Request, res: Response) {

    try {

      const id = Number(req.params.id)

      await usuarioService.deleteUsuario(id)

      res.json({
        message: "Usuario eliminado"
      })

    } catch (error: any) {

      res.status(500).json({
        error: error.message
      })
    }
  }
}