import { Data } from "@/types/types";
import { resources } from "./data";

export const getFilterResource= (items:Data[]):string[]=>{
    const filters=items.flatMap((i)=>i.categories);
    const uniqueF=new Set(filters)
    return Array.from(uniqueF).sort((v1,v2)=>v1.localeCompare(v2));
}   



export const filter=getFilterResource(resources);
