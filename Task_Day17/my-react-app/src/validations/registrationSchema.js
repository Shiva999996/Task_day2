import * as yup from "yup";

export const registrationSchema = yup.object({

    name: yup
        .string()
        .required("full name is required")
        .min(10, "name must be at least 10 characters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Enter the valid email"),

    password: yup
        .string()
        .required("password is required")
        .min(6, "Password must be atleast 6 characters"),

    confirmPassword: yup
        .string()
        .required("confrim your password")
        .oneOf([yup.ref("password")], "passwords must matched"),

})