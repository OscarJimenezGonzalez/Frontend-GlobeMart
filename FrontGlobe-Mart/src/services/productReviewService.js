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


export async function createOwnReview(reviewBody) {

    try {

        const { data } = await api.post('/productReview/customer', reviewBody
            , {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

        return data

    } catch (error) {

        console.log(error.message)

    }

}