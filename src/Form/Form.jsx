import { Form } from "formik";

const CustomForm = ({ className, children }) => {
  return <Form className={className}>{children}</Form>;
};

export default CustomForm;
