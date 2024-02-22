import api from "./mainConfig/config";

export async function getProductsFromSellers() {
    try {

        const { data } = await api.get('/productSellerCompany/')
        return data

    } catch (error) {

        console.log(error.message)

    }
}

export async function getOneProductFromSeller(id) {
    try {

        const { data } = await api.get(`/productSellerCompany/${id}`)
        return data

    } catch (error) {

        console.log(error.message)
        throw error;

    }
}


////// No funciona queda pendiente ponerlo a funcionar !!!!!
export async function UpdateQtyAvailable(id, qtyAvailable) {
    try {

        const response = await api.put(`/productSellerCompany/${id}`, { qtyAvailable: qtyAvailable })
        return response.data

    } catch (error) {

        console.log(error.message)
        throw error;

    }
}
////// No funciona queda pendiente ponerlo a funcionar !!!!!