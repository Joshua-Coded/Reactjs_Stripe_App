 const productsArray = [
    {
        id: "price_1LuOyzGuFczBDLSuyd2HT360",
        title: "Sneakers",
        price: 20.0,
    },

    {
        id: "price_1LuP2OGuFczBDLSuMuhwhSIL",
        title: "Sunglasses",
        price: 12.0,
    },
    {
        id: "price_1LuP0oGuFczBDLSukftYY8Af",
        title: "Headset",
        price: 15.0,
    },
    {
        id: "price_1LuP3qGuFczBDLSuxmG7VRAE",
        title: "Camera",
        price: 40.0,
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