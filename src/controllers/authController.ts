import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { authService } from "../services/authService"

const SECRET = "seguro"

export const authController = {

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const user = await authService.login(email)

            if (!user || user.password !== password) {
                return res.status(401).json({ error: "Credenciales inválidas" })
            }
            
            const token = jwt.sign(
                {
                    id: user.id,
                    rol: user.rol
                },
                SECRET,
                { expiresIn: "2h"}
            )

            res.json({ token })

        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}