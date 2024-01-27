import api from "./mainConfig/config";

export async function getProductCategories() {
    try {

        const { data } = await api.get('/productCategory/')
        return data

    } catch (error) {

        console.log(error.message)

    }
}