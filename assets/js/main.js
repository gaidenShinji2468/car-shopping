import {offcvRun} from "./offcanvas.js";
import {navbarRun} from "./navbar.js";
import {printProducts} from "./ui.js";
import {
    getProducts,
    addProduct,
    deleteProduct
} from "./crud.js";

// Ejecutar primero el navbar y luego el offcanvas
navbarRun();
offcvRun();

getProducts(printProducts);

/*window.addProduct = addProduct;
window.deleteTask = deleteTask;*/
