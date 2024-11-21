import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Field from "../../components/common/Field";
import { api } from "../../api"; // Axios instance
import { useAuth } from "../../context/AuthContext";

function QuizSetForm() {
  const { auth } = useAuth();
  const { authToken } = auth; // Get the auth token from context
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      console.log("Submitting data:", formData);

      // Make the API call with the Authorization header
      var response = await api.post(`/admin/quizzes`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Set auth header
        },
      });

      console.log("Response data:", response.data.data.id);

      // Navigate to the next page with form data
      navigate("/quiz_entry_page", {
        state: {
          formData, // Include form data
          id: response.data.data.id, // Include the response ID
        },
      });
    } catch (error) {
      console.error("Error submitting quiz:", error.response || error);
      // Handle error (e.g., show a toast or error message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Field label="Quiz Title" error={errors.title}>
          <input
            type="text"
            id="quiz-title"
            {...register("title", { required: "Quiz title is required" })}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
              errors.title && "border-red-500"
            }`}
            placeholder="Quiz Title"
          />
        </Field>
      </div>

      <div className="mb-6">
        <Field label="Description (Optional)">
          <textarea
            id="quiz-description"
            {...register("description")}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="Description"
          ></textarea>
        </Field>
      </div>

      <button
        type="submit"
        className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Next
      </button>
    </form>
  );
}

export default QuizSetForm;
