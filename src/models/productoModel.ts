export type Producto = {
    id?: number
    nombre: string
    descripcion?: string
    precio: number
    imagen_url?: string
    activo?: boolean
}

// entidad principal
export type Pedido = {
    id?: number
    cliente_id: number
    estado: string
    total: number
    fecha: string
}

// base de datos
export type PedidoItem = {
    id?: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: number
}

// frontend Carrito = mezcla de pedido + item
export type CarritoItem = {
    id: number
    cantidad: number
    precio: number
}