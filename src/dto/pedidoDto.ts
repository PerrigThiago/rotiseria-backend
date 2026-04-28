import { CarritoItem } from "../models/carritoModel" 

export type CrearPedidoDTO = {
    cliente: {
        nombre: string
        telefono: string
        direccion: string
    }
    carrito: CarritoItem[]
    total: number
}