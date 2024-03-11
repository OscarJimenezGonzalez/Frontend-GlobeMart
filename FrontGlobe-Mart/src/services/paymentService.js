
import api from "./mainConfig/config";


export async function createPayment(paymentData) {

    try {

        const { data } = await api.post('/payment/create-payment-intent', paymentData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}
