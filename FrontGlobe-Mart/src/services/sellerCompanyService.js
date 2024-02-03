import api from "./mainConfig/config";

export async function createOwnSellerCompany(sellerCompanyData) {
    try {

        const { data } = await api.post('/sellerCompany/profileCompany', sellerCompanyData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}
export async function getOwnSellerCompany() {
    try {

        const { data } = await api.get('/sellerCompany/profileCompany', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

        return data

    } catch (error) {

        console.log(error.message)

    }

}

