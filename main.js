// Realizar una clase “ProductManager” que gestione un conjunto de productos. ✅

// Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío. ✅

// Cada producto que gestione debe contar con las propiedades: ✅
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento ✅

// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial. ✅
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios ✅
// Al agregarlo, debe crearse con un id autoincrementable ✅

// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id ✅
// En caso de no coincidir ningún id, mostrar en consola un error “Not found” ✅

class ProductManager {

    #nextId;
    #products;

    constructor () {
        this.#products = []
        this.#nextId = 0
    }

    getProducts() {
        return this.#products;
    }

    addProduct(productObj) {
        // Validates required fields
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        for (const field of requiredFields) {
            if (!productObj[field]) {
                return `Error: field ${field} is missing on the object.`;
            }
        }

        // field "code" doesn't appear twice
        if (this.#products.some(product => product.code === productObj.code)) {
            return `Error: code ${productObj.code} already exists.`;
        }

        // Add new product with id
        const newProduct = {
            id: this.#nextId++,
            ...productObj
        };
        this.#products.push(newProduct);
        return "Product added.";
    }

    getProductById(id) {
        const product = this.#products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            return "Error: That product doesn't exists.";
        }
    }
}

// const PRODUCTS = new ProductManager();
// console.log(PRODUCTS.getProducts());
// PRODUCTS.addProduct({
//     title: "producto prueba",
//     description: "Este es un producto prueba",
//     price: 200,
//     thumbnail: "Sin imagen",
//     code: "abc123",
//     stock: 25
// });
// PRODUCTS.addProduct({
//     title: "producto prueba2",
//     description: "Este es un producto prueba2",
//     price: 300,
//     thumbnail: "Sin imagen",
//     code: "abc1234",
//     stock: 25
// });
// console.log(PRODUCTS.getProducts());
// PRODUCTS.addProduct({
//     title: "producto prueba",
//     description: "Este es un producto prueba",
//     price: 200,
//     thumbnail: "Sin imagen",
//     code: "abc123",
//     stock: 25
// });
// console.log(PRODUCTS.getProductById(1));
// console.log(PRODUCTS.getProductById(2));