const ProductManager = require('./ProductManagerClass')


main = async () => {
    const productManager = new ProductManager()

    await productManager.getProducts()

    await productManager.addProducts({

        title: "3",
        price: 555

    })
    await productManager.getProducts()

}

main()