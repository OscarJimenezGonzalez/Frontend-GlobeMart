import api from "./mainConfig/config";
import { saveTokenSettingTime } from "../auxStr/auxStructures";

export async function login(loginData) {

    try {
        const { data } = await api.post('/auth/login', loginData)
        localStorage.setItem('token', data.token)
        saveTokenSettingTime()
        return data
    } catch (error) {
        throw new Error("Invalid credentials")
    }

}

export async function signup(signupData) {
    try {
        const { data } = await api.post('/auth/signup', signupData)
        localStorage.setItem('token', data.token)
        saveTokenSettingTime()
        return data
    }
    catch (error) {
        // console.log(error.message)
        throw new Error("Invalid credentials in signup")
    }
}
