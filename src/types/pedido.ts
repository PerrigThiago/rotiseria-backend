import type { Cliente } from "./cliente"
import type { Producto } from "./producto"

export type PedidoItem = {
  id: number
  cantidad: number
  precio_unitario: number

  producto: Producto
}

export type Pedido = {
  id: number
  estado: string
  total: number
  fecha: string

  cliente: Cliente

  items: PedidoItem[]
}

/*
pedido
 ├── cliente
 └── items
      └── producto
*/