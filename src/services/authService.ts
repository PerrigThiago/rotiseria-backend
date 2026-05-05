import { supabase } from "../config/bd"
import jwt from "jsonwebtoken"

const SECRET = "seguro"

export const authService = {
  async login(email: string, password: string) {

    const { data: user, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("email", email)
      .single()

    if (error || !user) {
      throw new Error("Usuario no encontrado")
    }

    if (user.password !== password) {
      throw new Error("Contraseña incorrecta")
    }

    const token = jwt.sign(
      {
        id: user.id,
        rol: user.rol
      },
      SECRET,
      { expiresIn: "2h" }
    )

    return {
      token,
      rol: user.rol
    }
  }
}