export type Usuario = {
    id: number
    nombre: string
    email: string
    password: string
    rol: "admin" | "empleado"
    creado_en?: string
}