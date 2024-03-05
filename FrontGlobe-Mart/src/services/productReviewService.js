import api from "./mainConfig/config"

export async function getReviewsFromProduct(productVersionId) {
    try {

        const { data } = await api.get(`/productReview/${productVersionId}`)

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