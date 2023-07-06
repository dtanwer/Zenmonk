import express from 'express';
import {
    addProduct,
    updateProduct,
    getDraftProductsWithOwner,
    getProduct,
    getProducts,
    getProductsByOwner,
    deleteProduct,
} from '../controller/product.js'
const router = express.Router()
router.get('/', getProducts)
router.get('/:id', getProduct)
router.get('/owner/:ownerId', getProductsByOwner)
router.get('/ownerDraft/:ownerId', getDraftProductsWithOwner)
router.post('/add', addProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router