
const { json } = require('stream/consumers');
const Product2 = require('./ProductClass')
const fs = require('fs')


class ProductManager {
    constructor(path) {

        this.id = 0
        this.path = path

    }


    async getProducts() {

        try {
            const products = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(product) {
        try {
            const products = await this.getProducts()
            let hasProduct = products.some(prod => prod.code === product.code)
            if (hasProduct) {
                console.log('el producto ya fue agregado');
            } else {
                this.id = products.length == 0 ? 1 : products.at(-1).id + 1

                product.id = this.id
                products.push(product)
                await fs.promises.writeFile(this.path, JSON.stringify(products, '', '\t'), 'utf-8')
            }

        } catch (error) {
            console.log(error);
        }
    }
    async getProductById(id) {
        try {
            let products = await this.getProducts()
            let product = products.find(product => product.id == id)
            return product
        } catch (error) {
            return error
        }
    }

    async updateProduct(id, key, newValue) {
        let products = await this.getProducts()

        let product = await this.getProductById(id)

        let index = products.findIndex(prod => prod.id === id)
        console.log(index);
        if (index !== -1) {
            products[index][key] = newValue


            try {
                await fs.promises.writeFile(this.path, JSON.stringify(products, '', '\t'), 'utf-8')

            } catch (error) {
                console.log(error);
            }


        } else {
            console.log('producto no encontrado');
        }
    }
    async deleteProduct(id) {

        let products = await this.getProducts()
        let productExist = products.some(product => product.id == id)

        if (productExist) {
            let filteredProducts = products.filter(product => product.id != id)
            try {
                await fs.promises.writeFile(this.path, JSON.stringify(filteredProducts, '', '\t'), 'utf-8')
                return `producto con id: ${id} eliminado`
            }
            catch (error) {
                return error
            }
        } else
            return 'no existen productos con ese id'

    }
}
module.exports = ProductManager