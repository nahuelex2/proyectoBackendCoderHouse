const ProductManager = require('./ProductManager')
const express = require('express')
const uuid4 = require('uuid4')
const app = express()
app.use(express.json())
const port = 8080

app.listen(port, () => {
    console.log('server run on port ', port);
})


// main = async () => {

//     // creacion de instancia de ProductManager
//     const productManager = new ProductManager('./data.json')

//     // Primer llamada a getProducts() 
//     let Products = await productManager.getProducts()
//     console.log(Products);


//     let product = {
//         title: 'Producto de prueba',
//         description: 'Este es un producto de prueba',
//         price: 200,
//         thumbnail: 'Sin imagen',
//         code: 'bbb',
//         stock: 25
//     }


//     try {
//         await productManager.addProduct(product)
//     } catch (error) {
//         console.log(error);
//     }


//     // //segundo llamado a getproducts Esta vez trae con el producto agregado
//     // let products = await productManager.getProducts()
//     // console.log(products);



//     //getProductById
//     // let ProductById = await productManager.getProductById(1)
//     // console.log(ProductById);


//     //updateProduct
//     // await productManager.updateProduct(23, 'stock', 20)
//     // console.log(await productManager.getProducts());


//     //delete product
//     // await productManager.deleteProduct(1)
//     // console.log(await productManager.getProducts());



// }
const productManager = new ProductManager('./data.json')
// main()
app.get('/', (req, res) => {
    res.send('bienvenido al eccomerce')
})

app.get('/allProducts', async (req, res) => {
    let Products = await productManager.getProducts()
    console.log(Products);
    res.send({
        message: 'todos los productos ok',
        data: Products
    })
})

app.post('/saveProduct', async (req, res) => {

    const id = uuid4()
    let product = req.body
    // product.id = id
    // console.log(product);

    let test = await productManager.addProduct(product)

    if (test) {
        res.send({
            message: 'producto guardado correctamente',
            data: product
        })
    } else {
        res.send({
            message: res.send({ message: "producto ya existe" })
        })
    }





})

app.get('/productById/:id', async (req, res) => {
    let { id } = req.params
    let ProductById = await productManager.getProductById(id)
    if (ProductById) {
        res.send({
            ProductById
        })
    } else {
        res.status(404).send({
            message: 'producto no encontrado'
        })
    }
})

app.delete('/deleteProductById/:id', async (req, res) => {

    let { id } = req.params
    let value = await productManager.deleteProduct(id)
    console.log(value);
    res.send({ value })
})