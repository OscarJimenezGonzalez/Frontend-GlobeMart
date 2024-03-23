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

export async function UpdateQtyAvailable(id, availableQty) {
    try {

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found in localStorage.");
            throw new Error("Authentication token not found.");
        }


        const response = await api.put(`/productSellerCompany/cart/${id}`, { qtyAvailable: availableQty }, {
            headers: {

                Authorization: token,
                'Content-Type': 'application/json'
            },
        });


        return response.data;

    } catch (error) {
        console.error("Error en el servicio: ", error.message);
        throw error;
    }
}
/// No lo hemos probado todavía ... 
export async function createVersionOfProduct(productBody) {
    try {

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found in localStorage.");
            throw new Error("Authentication token not found.");
        }

        const response = await api.post(`/productSellerCompany/profileSeller/version`, productBody, {
            headers: {
                Authorization: token
            },
        });

        return response.data;

    } catch (error) {
        console.error("Error en el servicio: ", error.message);
        throw error;
    }
}



