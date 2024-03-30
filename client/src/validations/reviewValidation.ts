import * as Yup from "yup";

//To valid the comment of user which is required and need min of 10 characters!
export const reviewValidationSchema = Yup.object().shape({
 comment: Yup.string()
  .required("Review is required")
  .min(10, "Min 10 is characters is required"),
});
