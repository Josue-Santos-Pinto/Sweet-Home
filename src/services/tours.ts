import { apiTeste } from "@/data/apiTeste"
import { Tour } from "@/types/tour"

export const getAllProducts = async (): Promise<Tour[]> => {
    return new Promise((resolve,reject)=>{
        return setTimeout(()=>{resolve(apiTeste)},2000)
    })
}