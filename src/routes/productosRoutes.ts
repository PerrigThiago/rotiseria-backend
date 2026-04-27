import { Router } from "express"
import { supabase } from "../config/bd"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("productos")
            .select("*")

        if (error) {
            return res.sendStatus(500).json({ error: error.message })
        }

        res.json(data)
    } catch (err) {
        res.status(500).json({ error: "Error interno"})
    }
})

export default router