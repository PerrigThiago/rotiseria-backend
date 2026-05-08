export type Pedido = {
    id?: number
    cliente_id: number
    estado: string
    total: number
    fecha: string
}

export type PedidoItem = {
    id?: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: number
}