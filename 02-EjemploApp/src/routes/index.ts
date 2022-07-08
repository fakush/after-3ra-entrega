import { Router } from 'express';
import carts from './cart';
import products from './products'
import auth from './auth';

const router = Router();

router.use('/carts', carts);
router.use('/products', products);
router.use('/auth', auth)

router.use('/', (req, res) => {
    res.status(404).json({
      message: 'invalid api endpoint'
    })
})

export default router;
