import * as Yup from "yup";

//To valid the registration details of user
export const userRegisterSchema = Yup.object().shape({
 name: Yup.string()
  .required("name is required")
  .min(4, "Min 4 is characters is required"),

  email:Yup.string().email("Invalid Email Address").required("email is required"),

  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters and include uppercase letter, lowercase letter,and special character"
    )
});
