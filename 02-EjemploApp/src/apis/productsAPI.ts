import Products from '../models/products'

class ProductsAPI {
  async getProducts() {
    return await Products.getProducts()
  }

  async getProductById(id: string) {
    return await Products.getProductById(id)
  }

  async postProduct(product: any) {
    return await Products.postProduct(product)
  }

  async updateProduct(id: string, product: any) {
    return await Products.updateProduct(id, product)
  }

  async deleteProduct(id: string) {
    return await Products.deleteProduct(id)
  }
}

const productsAPI = new ProductsAPI()
export default productsAPI
