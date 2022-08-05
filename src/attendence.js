import axios from "axios";
export const attendence = async (values) => {
  return await axios.post("http://localhost:5000/attendence", values);
};
