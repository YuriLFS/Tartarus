import { object,string,number } from "yup"

export const FormsPageScheme = object({
	nome: string().required(),
	idade: number().optional(),
	
})