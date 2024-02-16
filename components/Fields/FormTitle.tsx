import { FC } from "react";
interface FormTitleSchema {
    title:string;
}
const FormTitle:FC<FormTitleSchema> = ({title}) => {
    return(
        <h1 className="text-3xl text-center mt-6 font-bold">{title}</h1>
    )
}

export default FormTitle;