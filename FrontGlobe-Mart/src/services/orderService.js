import api from "./mainConfig/config";

export async function getOrders() {

    try {

        const { data } = await api.get('/order', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {
        console.log(error.message)
    }

}
export async function getOneOrder(orderId) {

    try {

        const { data } = await api.get(`/order/${orderId}`,
            // {
            // headers: {
            //     Authorization: localStorage.getItem("token")
            // }
            // }

        )

        return data

    } catch (error) {
        console.log(error.message)
    }

}

export async function getOwnOrders() {

    try {

        const { data } = await api.get(`/order/customer`,
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



export async function createOrder(orderData) {

    try {

        const { data } = await api.post('/order/customer', orderData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}
