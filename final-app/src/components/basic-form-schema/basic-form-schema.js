import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    name: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Must be shorter than 20 characters")
        .required("Required"),
    email: Yup.string()
        //Проверяем, корректный ли адрес.
        //Если нет, то выводится сообщение в скобках
        .email("Invalid email address")
        //не сабмитим, если поле не заполнено
        .required("Required"),
    phone: Yup.string(),
    text: Yup.string()
        .min(2, "What is your message?")
        .required("Required")
});
export default BasicFormSchema;