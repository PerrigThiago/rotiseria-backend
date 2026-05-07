import { supabase } from "../config/bd"
import type { Categoria } from "../types/categoria"

export const categoriaService = {

  async getCategorias(): Promise<Categoria[]> {

    const { data, error } = await supabase
      .from("categorias")
      .select("*")

    if (error) throw error

    return data || []
  },

  async createCategoria(
    categoria: Omit<Categoria, "id">
  ): Promise<Categoria> {

    const { data, error } = await supabase
      .from("categorias")
      .insert([categoria])
      .select()
      .single()

    if (error) throw error

    return data
  },

  async updateCategoria(
    id: number,
    categoria: Partial<Categoria>
  ): Promise<Categoria> {

    const { data, error } = await supabase
      .from("categorias")
      .update(categoria)
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    return data
  },

  async deleteCategoria(id: number) {

    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("id", id)

    if (error) throw error
  }
}