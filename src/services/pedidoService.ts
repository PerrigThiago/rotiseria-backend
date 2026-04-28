import { supabase } from "../config/bd"
import {  PedidoItem } from "../models/pedidoModel"
import { CrearPedidoDTO } from "../dto/pedidoDto"

export const PedidoService = {
    async crearPedido(data: CrearPedidoDTO) {
        const { cliente, carrito, total } = data

        // crear cliente
        const { data: clienteData, error: errorCliente } = await supabase
            .from("clientes")
            .insert([cliente])
            .select()
            .single()

        if (errorCliente) throw errorCliente

        // crear pedido
        const { data: pedido, error: errorPedido } = await supabase
            .from("pedidos")
            .insert([{
                cliente_id: clienteData.id,
                total,
                estado: "pendiente"
            }])
            .select()
            .single()

        if (errorPedido) throw errorPedido

        const items: PedidoItem[] = carrito.map(item => ({
            pedido_id: pedido.id!,
            producto_id: item.id,
            cantidad: item.cantidad,
            precio_unitario: item.precio
        }))

        const { error: errorItems } = await supabase
        .from("pedido_items")
        .insert(items)

        if (errorItems) throw errorItems

        return {
            pedido,
            items
        }
    }
}