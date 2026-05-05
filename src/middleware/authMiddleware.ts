import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const SECRET = "seguro"

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ error: "No autorizado" })
    }

    try {
        const decoded = jwt.verify(token, SECRET) as { id: number, rol: string }

        req.user = decoded

        next()

    } catch {
        res.status(401).json({ error: "Token inválido" })
    }
}

export const roleMiddleware = (roles: string[]) => {
    
  return (req: Request, res: Response, next: NextFunction) => {

    if (!req.user) {
      return res.status(401).json({ error: "No autenticado" })
    }

    if (!roles.includes(req.user.rol)) {
      return res.status(403).json({ error: "Sin permisos" })
    }

    next()
  }
}