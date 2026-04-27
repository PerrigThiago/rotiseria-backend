import { supabase } from "../config/bd"
import { Producto } from "../models/productoModel"

export const productoService = {
    async getProductos() {
        const { data, error } = await supabase
            .from("productos")
            .select("*")

        if (error) throw error
        return data
    },

    async createProductos(producto: Producto) {
        const { data, error } = await supabase
            .from("productos")
            .insert([producto])
            .select()
            .single()

        if (error) throw error
        return data
    },

    async updateProducto(id: number, producto: Partial<Producto>) {
        const { data, error} = await supabase 
            .from("productos")
            .update(producto)
            .eq("id", id)
            .select()
            .single()
        
    if (error) throw error
    return data
    },

    async deleteProductos(id: number) {
        const { error} = await supabase
            .from("productos")
            .delete()
            .eq("id", id)

    if (error) throw error
    }
}