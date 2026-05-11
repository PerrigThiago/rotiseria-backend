import { supabase } from "../config/bd"
import type { PedidoItem } from "../types/pedido"
import { CrearPedidoDTO } from "../dto/pedidoDto"

export const PedidoService = {
    async crearPedido(data: CrearPedidoDTO) {

        const { cliente, carrito } = data

        //  1. Crear cliente
        const { data: clienteData, error: errorCliente } = await supabase
            .from("clientes")
            .insert([cliente])
            .select()
            .single()

        if (errorCliente) throw errorCliente

        //  2. Crear pedido SIN total todavía
        const { data: pedido, error: errorPedido } = await supabase
            .from("pedidos")
            .insert([{
                cliente_id: clienteData.id,
                estado: "pendiente",
                total: 0
            }])
            .select()
            .single()

        if (errorPedido) throw errorPedido

        let total = 0
        const items: PedidoItem[] = []

        //  3. Procesar carrito
        for (const item of carrito) {

            // buscar producto
            const { data: producto, error: errorProducto } = await supabase
                .from("productos")
                .select("id, precio")
                .eq("id", item.id)
                .single()

            if (errorProducto) throw errorProducto

            const subtotal = producto.precio * item.cantidad
            total += subtotal

            items.push({
                pedido_id: pedido.id!,
                producto_id: item.id,
                cantidad: item.cantidad,
                precio_unitario: producto.precio 
            })
        }

        //  4. Insertar items
        const { error: errorItems } = await supabase
            .from("pedido_items")
            .insert(items)

        if (errorItems) throw errorItems

        //  5. Actualizar total del pedido
        const { error: errorUpdate } = await supabase
            .from("pedidos")
            .update({ total })
            .eq("id", pedido.id)

        if (errorUpdate) throw errorUpdate

        return {
            pedido: {
                ...pedido,
                total
            },
            items
        }
    },

    async obtenerPedido() {

    const { data, error } = await supabase
        .from("pedidos")
        .select(`
            *,
            
            cliente:clientes (
                id,
                nombre,
                telefono,
                direccion
            ),

            items:pedido_items (
                id,
                cantidad,
                precio_unitario,

                producto:productos (
                    id,
                    nombre,
                    precio,
                    imagen_url
                )
            )
        `)
        .order("fecha", { ascending: false })

    if (error) throw error

    return data
    
    },

    async updateEstado(id: number, estado: string) {

    const { data, error } = await supabase
        .from("pedidos")
        .update({ estado })
        .eq("id", id)
        .select()
        .single()

    if (error) throw error

    return data
    }
}