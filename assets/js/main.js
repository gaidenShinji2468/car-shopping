import {run} from "./offcanvas.js";
import {printProducts} from "./ui.js";
import {
    getProducts,
    addProduct,
    deleteProduct
} from "./crud.js";

// Ejecutar el offcanvas
run();

getProducts(printProducts);

/*window.addProduct = addProduct;
window.deleteTask = deleteTask;*/
