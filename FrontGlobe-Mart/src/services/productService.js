import api from "./mainConfig/config";


export async function createProducts() {

    try {

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found in localStorage.");
            throw new Error("Authentication token not found.");
        }

        const response = await api.post('/product', productBody, {
            headers: {
                Authorization: token
            },
        })

        return response.data

    } catch (error) {

        console.log(error)

    }

}