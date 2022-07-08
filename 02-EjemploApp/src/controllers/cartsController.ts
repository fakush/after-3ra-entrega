import CartsAPI from '../apis/cartsAPI'
import { Request, Response, NextFunction } from 'express'

class CartsController {
  hasIdParam(req: Request, res: Response, next: NextFunction){
    req.params.id ? next() : res.status(404).json({ msg: 'missing id' })
  }

  async getCart(req: Request, res: Response) {
    try {
      const response = await CartsAPI.getCart(req.params.id)
      return res.status(200).json(response)
    } catch (error: any) {
      return res.status(404).json({ error: error.message })
    }
  }

  async createCart(id: string) {
    try {
      await CartsAPI.createCart(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async updateCart(req: Request, res: Response) {
    try {
      const response = await CartsAPI.updateCart(req.params.id, req.body)
      return res.status(200).json(response)
    } catch (error: any) {
      return res.status(404).json({ error: error.message })
    }
  }

  async emptyCart(req: Request, res: Response) {
    try {
      const response = await CartsAPI.emptyCart(req.params.id)
      return res.status(200).json(response)
    } catch (error: any) {
      return res.status(404).json({ error: error.message })
    }
  }
}


const cartsController = new CartsController()
export default cartsController
