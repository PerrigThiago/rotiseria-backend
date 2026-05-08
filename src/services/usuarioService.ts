import { supabase } from "../config/bd"
import type { Usuario } from "../types/usuario"

export const usuarioService = {

  async getUsuarios(): Promise<Usuario[]> {

    const { data, error } = await supabase
      .from("usuarios")
      .select("*")

    if (error) throw error

    return data || []
  },

  async createUsuario(
    usuario: Omit<Usuario, "id" | "creado_en">
  ): Promise<Usuario> {

    const { data, error } = await supabase
      .from("usuarios")
      .insert([usuario])
      .select()
      .single()

    if (error) throw error

    return data
  },

  async deleteUsuario(id: number) {

    const { error } = await supabase
      .from("usuarios")
      .delete()
      .eq("id", id)

    if (error) throw error
  }
}