import { emailReg } from "~/config/regex";

export const isValidEmail = (email:string)=> emailReg.test(email)