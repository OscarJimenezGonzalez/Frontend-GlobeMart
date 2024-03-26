import { Try } from "@mui/icons-material";
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

export async function updateCartItemListStatus(orderId, cartItemStatus) {

    try {

        const { data } = await api.put(`/cartItem/updateStatus/${orderId}`, cartItemStatus, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}

export async function updateCartItemStatus(cartItemId, cartItemStatus) {

    try {

        const { data } = await api.put(`/cartItem/${cartItemId}`, cartItemStatus, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}


export async function getCartItemsFromOrder(orderId) {

    try {

        const { data } = await api.get(`/cartItem/customer/${orderId}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )

        return data

    } catch (error) {
        console.log(error.message)
    }

}

export async function getCartItemsFromSeller(sellerCompanyId) {

    try {

        const { data } = await api.get(`/cartItem/seller/${sellerCompanyId}`, {

            headers: {
                Authorization: localStorage.getItem("token")
            }

        })

        return data

    } catch (error) {


        console.log(error.message)


    }


}

