import { Categoria } from "./categoria"

export type Producto = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen_url?: string
    activo: boolean

    categoria_id: number

    categoria?: Categoria
}