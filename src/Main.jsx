import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./config";
const Main = () => {
  const navigate = useNavigate();
  const values = localStorage.getItem("creds");
  axios
    .post(`${baseUrl}/attendence`, JSON.parse(values))
    .then((res) => {
      console.log(res.data);
      if (res.data.status === 200) {
        localStorage.setItem("creds", JSON.stringify(values));
        navigate("/success");
      } else if (res.data.status === 400 || res.data.status === 500) {
        localStorage.removeItem("creds");
        navigate("/error");
      }
    })
    .catch((err) => {
      console.log("error", err);
      navigate("/register");
    });
  return <div>Main</div>;
};

export default Main;
