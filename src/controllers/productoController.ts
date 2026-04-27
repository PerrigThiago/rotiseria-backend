import { Request, Response } from "express"
import { productoService } from "../services/productoService"

export const productosController = {
    async obtenerProductos(req: Request, res: Response) {
        try { 
            const productos = await productoService.getProductos()
            res.json(productos)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }, 

    async crearProductos(req: Request, res: Response) {
        try {
            const productos = await productoService.createProductos(req.body)
            res.status(201).json(productos)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    },

    async actualizarProductos(req: Request, res: Response) {
        try {
            const id = Number(req.params.id) 
            const producto = await productoService.updateProducto(id, req.body)
            res.json(producto)
        } catch (error: any) {
            res.status(500).json({ error: error.message})
        }
    },

    async eliminarProductos(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const producto = await productoService.deleteProductos(id)
            res.json({ mensaje: "Producto eliminado" })
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}