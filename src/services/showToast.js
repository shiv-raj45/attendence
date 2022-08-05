import { toast } from "react-toastify";

export class Toast {
  aowSuccessToast(message) {
    toast.success(message);
  }

  showErrorToast(message) {
    toast.error(message);
  }

  showWarningToast(message) {
    toast.warn(message);
  }
  dismissToast() {
    toast.dismiss();
  }
  loadingToast({ message, id }) {
    toast(message, {
      isLoading: true,
      toastId: id,
    });
  }
  updateLoadingToast({ id, message, type }) {
    toast.update(id, {
      type: type,
      render: message,
      isLoading: false,
      autoClose: 3000,
    });
  }
}
const showToast = new Toast();
export default showToast;
