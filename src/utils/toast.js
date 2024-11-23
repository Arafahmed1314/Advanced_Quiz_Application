import { toast } from "react-toastify";

// Success Toasts
export const showDeleteSuccess = () => {
    toast.success("🗑️ Deleted Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const showPublishSuccess = () => {
    toast.success("🚀 Published Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const showUpdateSuccess = () => {
    toast.success("✅ Updated Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
export const showQuizCreateSuccess = () => {
    toast.success("📋 Quiz Created Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
export const showCompleteAllQuestionsSuccess = () => {
    toast.success("🎉 You’ve Successfully Completed All Questions!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
export const showLoginCredential = () => {
    toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
    });
};
