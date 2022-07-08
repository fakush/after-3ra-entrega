import { Router } from 'express'
import ProductsController from '../controllers/productsController'

const router = Router()

router.get('/:id?', ProductsController.getProducts)

router.post('/', ProductsController.isValid, ProductsController.postProduct)

router.put('/:id', ProductsController.hasIdParam, ProductsController.isValid, ProductsController.updateProduct)

router.delete('/:id', ProductsController.hasIdParam, ProductsController.deleteProduct)

export default router
