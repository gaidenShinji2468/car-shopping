const BASE_URL = "https://academlo-api-production.up.railway.app/api";

function getProducts(printProducts)
{
    axios.get(`${BASE_URL}/products`)
	.then((res) => {
            printProducts(res.data);;
	})
	.catch((err) => {
            console.log(err);
	});
}

function addProduct()
{
    ;
}

function deleteProduct()
{
    ;
}

export {
    getProducts,
    addProduct,
    deleteProduct
};
