import * as Yup from "yup";

export const orderFormSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Min 2 letters required")
    .max(20, "Max 20 letters allowed")
    .required("This field is required"),

  lastName: Yup.string()
    .min(2, "Min 2 letters required")
    .max(20, "Max 20 letters allowed")
    .required("This field is required"),

  age: Yup.number()
    .min(18, "Min age is 18")
    .max(99, "Max age is 99")
    .required("This field is required"),

  address: Yup.string().required("This field is required"),

  phoneNumber: Yup.string()
    .matches(
      /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      "Number is not correct"
    )
    .required("This field is required"),
});
