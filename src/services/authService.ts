import { supabase } from "../config/bd";

export const authService = {

    async login(email: string) {
        
        const { data, error } = await supabase 
            .from("usuarios")
            .select("*")
            .eq("email", email)
            .single()

        if (error) throw error
        return data
    }
}