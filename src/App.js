import Register from "./Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Success from "./Success/Success";
import Error from "./Error/Error";
import Main from "./Main";
function App() {
  const creds = localStorage.getItem("creds");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={creds ? <Main /> : <Navigate to="/register" />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
