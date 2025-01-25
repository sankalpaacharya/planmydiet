import { ZodError } from "zod";

export function zodErrorParser(error:ZodError){
    return error.issues.map((e)=>{
        const err:{name:(string|number),message:string}= {name:e.path[0],message:e.message}
        return err
    })
}
