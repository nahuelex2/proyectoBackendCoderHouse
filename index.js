const ProductManager = require('./ProductManagerClass')


main = async () => {
    // creacion de instancia de ProductManager
    const productManager = new ProductManager('./data.json')

    // Primer llamada a getProducts() 
    let Products = await productManager.getProducts()
    console.log(Products);


    let product = {
        title: 'Producto de prueba',
        description: 'Este es un producto de prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'bbb',
        stock: 25
    }


    // try {
    //     await productManager.addProduct(product)
    // } catch (error) {
    //     console.log(error);
    // }


    // //segundo llamado a getproducts Esta vez trae con el producto agregado
    // let products = await productManager.getProducts()
    // console.log(products);



    //getProductById
    // let ProductById = await productManager.getProductById(1)
    // console.log(ProductById);


    //updateProduct
    // await productManager.updateProduct(23, 'stock', 20)
    // console.log(await productManager.getProducts());


    //delete product
    // await productManager.deleteProduct(1)
    // console.log(await productManager.getProducts());


}

main()