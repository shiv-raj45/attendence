import { Field, Formik } from "formik";
import * as Yup from "yup";
import CustomForm from "../Form/Form";
import TextInput from "../Form/TextInput";
import login from "../Assets/logn.jpg";
import {
  EyeIcon,
  EyeOffIcon,
  IdentificationIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import showToast from "../services/showToast";
import { baseUrl } from "../config";

const Register = () => {
  const formInitialValues = {
    id: "",
    password: "",
  };
  const navigate = useNavigate();
  const ID = "REGISTER";
  const handleSubmit = (values) => {
    console.log(baseUrl);
    showToast.loadingToast({ message: "Registering...", id: ID });
    axios
      .post(`${baseUrl}/attendence`, values)
      .then((res) => {
        showToast.updateLoadingToast({
          id: ID,
          message: "Registering...",
          type: "success",
        });
        if (res.data.status === 200) {
          localStorage.setItem("creds", JSON.stringify(values));
          navigate("/success");
        } else if (res.data.status === 400 || res.data.status === 500) {
          showToast.updateLoadingToast({
            id: ID,
            message: "failed registering",
            type: "error",
          });
          localStorage.removeItem("creds");
        }
      })
      .catch((err) => {
        showToast.updateLoadingToast({
          id: ID,
          message: "failed registering",
        });
      });
  };
  const [showPassword, setShowPassword] = useState(false);

  const schemaValidation = Yup.object().shape({
    id: Yup.string().required("Id is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleShowPassword = () => {
    console.log(showPassword);
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white-600 w-screen h-screen backdrop-blur-sm flex flex-col justify-center items-center">
      <img src={login} alt="login" />
      <Formik
        initialValues={formInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schemaValidation}
      >
        {({ errors, touched }) => (
          <CustomForm className="  py-10 px-2 flex justify-center items-center flex-col">
            <TextInput label="Email" error={touched.id && errors?.id}>
              <IdentificationIcon className="icon " />
              <Field
                name="id"
                type="text"
                className="input w-full text-gray-400 focus:text-green-600"
                placeholder="id"
              />
            </TextInput>

            <TextInput
              label="password"
              error={touched.password && errors?.password}
            >
              <LockClosedIcon className={`icon `} />
              <Field
                name="password"
                type={`${showPassword ? "text" : "password"}`}
                className="input text-gray-400 focus:text-green-600"
                placeholder="password"
              />
              <div onClick={handleShowPassword}>
                {showPassword ? (
                  <EyeIcon className="icon cursor-pointer" />
                ) : (
                  <EyeOffIcon className="icon cursor-pointer" />
                )}
              </div>
            </TextInput>

            <button
              className={`bg-green-600 mt-10 w-full h-10 cursor-pointer p-2 rounded-sm text-white disabled:opacity-50`}
              type="submit"
              value=" Register Client"
              disabled={
                errors.id || errors.password || Object.keys(errors).length > 0
              }
            >
              Register Me
            </button>
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};

export default Register;
