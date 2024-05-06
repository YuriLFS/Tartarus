import * as yup from "yup";

export const SchemaForm = yup.object({
    example1: yup.string().optional(),
    example2: yup.string().optional(),
    example3: yup.string().required("Campo obrigatório"),
    example4: yup.string().optional(),
    select1: yup.string().optional(),
    number1: yup.number().optional(),
    pais: yup.string().optional(),
    estado: yup.string().optional(),
})
