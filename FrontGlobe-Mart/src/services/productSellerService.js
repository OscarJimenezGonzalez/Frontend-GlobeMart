import api from "./mainConfig/config";

export async function getProductsFromSellers() {
    try {

        const { data } = await api.get('/productSellerCompany/')
        return data

    } catch (error) {

        console.log(error.message)

    }
}

export async function getListOfProductsFromSellers(sellerCompanyId) {
    try {

        const { data } = await api.get(`/productSellerCompany/customer/${sellerCompanyId}`)

            // {
            // headers: {
            //     Authorization: localStorage.getItem("token")
            // }

        // )

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
export async function UpdateQtyAvailable(id, availableQty) {
    try {
        // Obtener el token de autenticación de localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found in localStorage.");
            throw new Error("Authentication token not found.");
        }

        // Realizar la solicitud PUT
        const response = await api.put(`/productSellerCompany/cart/${id}`, { qtyAvailable: availableQty }, {
            headers: {
                // Asegurarse de que el token se incluye correctamente
                Authorization: token,
                'Content-Type': 'application/json'
            },
        });

        // Devolver los datos de respuesta
        return response.data;

    } catch (error) {
        console.error("Error en el servicio: ", error.message);
        throw error; // Propagar el error para manejarlo más arriba en la cadena
    }
}
////// No funciona queda pendiente ponerlo a funcionar !!!!!