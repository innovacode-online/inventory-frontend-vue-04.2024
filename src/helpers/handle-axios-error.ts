import { isAxiosError } from "axios"
import { toast } from "vue-sonner"


export const handleAxiosError = ( error: unknown ) => {

    if( isAxiosError(error) ){
        toast.error('Ocurrio un error',{
            description: error.response?.data.message
        })
    }
}