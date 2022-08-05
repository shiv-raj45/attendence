import { attendence } from "./attendence";
import { useMutation } from "@tanstack/react-query";
const useAttend = (successCallBack, failureCallBack) => {
  return useMutation((creds) => attendence(creds), {
    onSuccess: (res) => {
      console.log("res", res);
    },
  });
};

export default useAttend;
