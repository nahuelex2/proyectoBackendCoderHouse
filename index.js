const ProductManager = require('./ProductManagerClass')


main = async () => {
    const productManager = new ProductManager('./data.json')

    // await productManager.getProducts()

    // await productManager.addProducts({

    //     title: "3",
    //     price: 555

    // })
    console.log(await productManager.getProducts());

    // await productManager.getProductById(32)
    // console.log(await productManager.getProducts());
    // await productManager.deleteProduct(1)
    // console.log(await productManager.getProducts());

    let product = {
        title: 'Producto de prueba',
        description: 'Este es un producto de prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'ccc',
        stock: 25
    }


    await productManager.addProduct(product)

    let product2 = {
        title: 'Producto de prueba',
        description: 'Este es un producto de prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'hhh',
        stock: 25
    }
    await productManager.addProduct(product2)

    console.log(await productManager.getProducts());

    let prods = await productManager.getProducts()


}

main()