import api from "./mainConfig/config";

export async function getProductsFromSellers() {
    try {

        const { data } = await api.get('/productSellerCompany/')
        return data

    } catch (error) {

        console.log(error.message)

    }
}
