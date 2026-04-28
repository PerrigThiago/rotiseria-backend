import { supabase } from "../config/bd"
import { Cliente } from "../models/clienteModel"

export const clienteService = {
    async getCliente() {
        const { data, error } = await supabase 
            .from("clientes")
            .select("*")

        if (error) throw error
        return data
    },

    async createCliente(cliente: Cliente) {
        const { data, error } = await supabase
            .from("clientes")
            .insert([cliente])
            .select()
            .single()

        if (error) throw error
        return data
    },

    async updateCliente(id: number, cliente: Partial<Cliente>) {
        const { data, error } = await supabase
            .from("clientes")
            .update(cliente)
            .eq("id", id)
            .select()
            .single()

        if (error) throw error
        return data
    },

    async deleteCliente(id: number) {
        const { data, error } = await supabase
            .from("clientes")
            .delete()
            .eq("id", id)

        if (error) throw error
    }
}