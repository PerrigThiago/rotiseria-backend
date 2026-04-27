import { CarritoItem } from "../models/productoModel" 

export type CrearPedidoDTO = {
    cliente: {
        nombre: string
        telefono: string
        direccion: string
    }
    carrito: CarritoItem[]
    total: number
}