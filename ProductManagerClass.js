
const { json } = require('stream/consumers');
const product = require('./ProductClass')
const fs = require('fs')
class ProductManager {
    constructor() {

        this.id = 0


    }


    async getProducts() {

        try {
            const products = JSON.parse(await fs.promises.readFile('./data.json', 'utf-8'))
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async addProducts(product) {
        try {
            const products = await this.getProducts()
            products.push(product)
            await fs.promises.writeFile('./data.json', JSON.stringify(products, '', '\t'), 'utf-8')
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = ProductManager