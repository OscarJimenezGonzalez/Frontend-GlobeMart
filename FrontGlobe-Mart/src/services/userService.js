import api from "./mainConfig/config";

export async function getOwnProfile() {
    try {

        const { data } = await api.get('/user/profile', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        return data

    } catch (error) {

        console.log(error.message)

    }
}