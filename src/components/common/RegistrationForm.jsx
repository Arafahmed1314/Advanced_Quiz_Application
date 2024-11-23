import { useForm } from "react-hook-form";
import axios from "axios";
import Field from "./Field";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const requestBody = {
      full_name: data.name,
      email: data.email,
      password: data.password,
      ...(data.isAdmin && { role: "admin" }),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        requestBody
      );
      if (response.status !== "fail") {
        navigate("/login");
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000, // Closes after 3 seconds
        });
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create Account
      </h2>

      {/* Full Name Field */}
      <Field label="Full Name" error={errors.name}>
        <input
          {...register("name", { required: "Full name is required" })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
          type="text"
        />
      </Field>

      {/* Email Field */}
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Email address"
          type="email"
        />
      </Field>

      {/* Password Fields */}
      <div className="flex gap-4">
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Password"
            type="password"
          />
        </Field>
        <Field label="Confirm Password" error={errors.confirmPassword}>
          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords must match",
            })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Confirm Password"
            type="password"
          />
        </Field>
      </div>

      {/* Admin Checkbox */}
      <div className="mb-6 flex items-center gap-2">
        <input
          {...register("isAdmin")}
          type="checkbox"
          id="admin"
          className="rounded border-gray-300 focus:ring focus:ring-primary"
        />
        <label htmlFor="admin" className="text-gray-700">
          Register as Admin
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition"
      >
        Create Account
      </button>
    </form>
  );
}

export default RegistrationForm;
