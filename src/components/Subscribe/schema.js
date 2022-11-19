import * as yup from "yup";
import { EMAIL_REGEX } from "components/constants/validationRules";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Please enter your email")
        .matches(EMAIL_REGEX, "Enter a valid email"),
});

export default schema;