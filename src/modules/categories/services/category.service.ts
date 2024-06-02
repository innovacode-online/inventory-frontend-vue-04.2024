import inventoryDb from "@/api/inventoryDb";
import type { ICategoriesResponse } from "../interfaces";



async function find( token: string ) {
    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>('/categories', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data.categories


    } catch (error) {
        throw error;
    }
}


export default {
    find,
}