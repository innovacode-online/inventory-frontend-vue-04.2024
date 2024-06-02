import inventoryDb from "@/api/inventoryDb"
import type { ILoginResponse, IUser } from "../interfaces"


const login = async (email: string, password: string) => {
    try {
        
        const { data } = await inventoryDb.post<ILoginResponse>('/auth/login',{
            email,
            password
        })

        return {
            user: data.user,
            token: data.token
        }

    } catch (error) {
        console.log(error)
        throw error;
    }
}

const checkToken = async (token: string) => {
    try {
        const { data } = await inventoryDb.post<{ user: IUser}>('/auth/checkToken',{}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data.user;
    } catch (error) {
        throw error;        
    }
} 


const logout = async (token: string) => {

    console.log(token)

    try {
        const { data } = await inventoryDb.post<IUser>('/auth/logout',{}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data;
    } catch (error) {
        throw error;        
    }
}

export default {
    login,
    logout,
    checkToken
}