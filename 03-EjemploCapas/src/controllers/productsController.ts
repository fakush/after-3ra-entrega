import ProductsAPI from '../apis/productsAPI'
import { Request, Response, NextFunction } from 'express'

class ProductsController {
  hasIdParam(req: Request, res: Response, next: NextFunction) {
    req.params.id ? next() : res.status(404).json({ msg: 'missing id' })
  }

  isValid(req: Request, res: Response, next: NextFunction) {
    const { name, code, price, stock } = req.body
    if (
      !name ||
      typeof name !== 'string' ||
      !code ||
      typeof code !== 'string' ||
      !price ||
      typeof price !== 'number' ||
      !stock ||
      typeof stock !== 'number'
    ) {
      return res.status(400).json({
        msg: 'Falta ingresar alguno de los campos obligatorios o está en un formato incorrecto: Name, Code, Price y Stock'
      })
    }
    next()
  }

  async getProducts(req: Request, res: Response) {
    const id = req.params.id
    if (id) {
      try {
        const response = await ProductsAPI.getProductById(id)
        return res.status(200).json(response)
      } catch (error: any) {
        return res.status(404).json({ msg: error.message })
      }
    }
    const response = await ProductsAPI.getProducts()
    return res.status(200).json(response)
  }

  async postProduct(req: Request, res: Response) {
    try {
      const newItem = await ProductsAPI.postProduct(req.body)
      return res.json({ msg: 'Adding product: ', data: newItem })
    } catch (error: any) {
      return res.status(400).json({ msg: error.message })
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedItem = await ProductsAPI.updateProduct(req.params.id, req.body)
      res.json({ msg: 'Updating Product', data: updatedItem })
    } catch (error: any) {
      return res.status(400).json({ msg: error.message })
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await ProductsAPI.deleteProduct(req.params.id)
      return res.status(200).json({
        msg: 'product deleted successfully'
      })
    } catch (error: any) {
      return res.status(400).json({ msg: error.message })
    }
  }
}

const productsController = new ProductsController()
export default productsController
