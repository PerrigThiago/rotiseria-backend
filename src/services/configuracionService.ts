import { supabase } from "../config/bd";
import type { Configuracion } from "../types/configuracion"

export const configuracionService = {

    async getConfiguraciones(): Promise<Configuracion> {

        const { data, error } = await supabase
            .from("configuracion")
            .select("*")
            .single()

        if (error) throw error

        return data
    },

    async updateConfiguracion( id: number, config: Partial<Configuracion>): Promise<Configuracion> {
        const { data, error } = await supabase
            .from("configuracion")
            .update(config)
            .eq("id", id)
            .select()
            .single()

        if (error) throw error

        return data
    }
}