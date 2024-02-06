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
export async function updateOwnProfile(profileData) {
    try {

        const { data } = await api.put('/user/profile', profileData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        // console.log("data updated: ", data)
        return data

    } catch (error) {

        console.log(error.message)

    }
}