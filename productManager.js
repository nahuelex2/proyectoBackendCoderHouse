class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

}


class ProductManager {

    constructor() {
        this.products = []
        this.id = 0
        const test = 3
    }



    addProduct(product) {

        let hasProduct = this.products.some(prod => prod.code === product.code)
        if (hasProduct) {
            console.log('el producto ya fue agregado');
        } else {
            this.id++

            let newProduct = new Product(
                this.id,
                product.title,
                product.description,
                product.price,
                product.thumbnail,
                product.code,
                product.stock
            )

            this.products.push(newProduct)
        }



    }

    async getProducts() {
        const fs = require('fs')
        try {

            const products = await fs.promises.readFile('./data.json', 'utf-8')
            console.log(products);
        } catch (error) {
            console.log(error);
        }

    }

    getProductById(id) {
        let product = this.products.find(product => product.id === id)


        return product || 'No tiene ese  producto'

    }
}
//-------------- creacion de instancia  de productManager----------------
const productManager = new ProductManager()

productManager.getProducts()

//primer get Products que devuelve array vacio al no tener ningun producto


// let product = {
//     title: 'Producto de prueba',
//     description: 'Este es un producto de prueba',
//     price: 200,
//     thumbnail: 'Sin imagen',
//     code: 'abc123',
//     stock: 25
// }

//agregar producto nuevo
// productManager.addProduct(product)

// obtener los productos para ver el producto agregado
// console.log(productManager.getProducts());


// tratar de agregar de nuevo el mismo producto
// productManager.addProduct(product)


// obtener producto por id
// let productoPorId = productManager.getProductById(12)

// console.log(productoPorId);
