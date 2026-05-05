import { Request } from "express"

export interface UserPayLoad {
    id: number 
    rol: string
}

declare module "express-serve-static-core" {
    interface Request {
        user?: UserPayLoad
    }
}