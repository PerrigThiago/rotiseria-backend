import { Request, Response } from "express"
import { authService } from "../services/authService"

export const authController = {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(400).json({ error: "Faltan datos" })
            }

            const result = await authService.login(email && password)

            res.json(result)

        } catch (error: any) {
            res.status(401).json({ error: error.message })
        }
    }

}