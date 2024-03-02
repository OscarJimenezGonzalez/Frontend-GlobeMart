import api from "./mainConfig/config";


export async function createCartItem(itemData) {

    try {

        const { data } = await api.post('/cartItem/customer', itemData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}
