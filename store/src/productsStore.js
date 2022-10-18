const productsArray = [
    {
        id: "1",
        title: "coffee",
        price: 4.66,
    },

    {
        id: "2",
        title: "sunglasses",
        price: 4.99,
    },
    {
        id: "3",
        title: "rice",
        price: 5.00,
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id == id);

    if (productData == undefined) {
        console.log("Product data does not exit for ID: " + id);
        return undefined;
    }

    return productData;
}


export {productsArray, getProductData};