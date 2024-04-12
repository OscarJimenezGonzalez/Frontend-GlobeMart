import api from "./mainConfig/config";

export async function createProducts(productBody) {

    try {

        const response = await api.post('/product', productBody, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        if (response && response.data) {

            return response.data

        } else {

            throw new Error("no data received")

        }

    } catch (error) {

        console.log(error.message)
        throw error;

    }

}
