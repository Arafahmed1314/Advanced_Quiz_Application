import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = async (formData) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { tokens, user } = response.data.data;

        if (tokens) {
          setAuth({
            user,
            authToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error details:", error); // Log full error object
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      setError("root.random", { type: "random", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Field
          label="Enter your username or email address"
          error={errors.email}
        >
          <input
            {...register("email", {
              required: "username or email is required",
            })}
            className={`w-full px-4 py-3 rounded-lg border border-gray-300${
              errors.email && "border-red-500"
              // : "w-full px-4 py-3 rounded-lg border border-gray-300"
            }`}
            required
            placeholder="Username or email address"
            type="email"
            id="email"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Enter your Password" error={errors.password}>
          <input
            {...register("password", { required: "password is required" })}
            className={`w-full px-4 py-3 rounded-lg border border-gray-300${
              errors.email && "border-red-500"
              // : "w-full px-4 py-3 rounded-lg border border-gray-300"
            }`}
            placeholder="Password"
            type="password"
            id="password"
          />
        </Field>
      </div>
      <div className="mb-6 flex gap-2 items-center">
        <input
          type="checkbox"
          id="admin"
          className="px-4 py-3 rounded-lg border border-gray-300"
        />
        <label htmlFor="admin" className="block ">
          Login as Admin
        </label>
      </div>
      <Field>
        <button
          className="w-full bg-primary text-white py-3 rounded-lg mb-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sign in..." : "Sign in"}
        </button>
      </Field>
    </form>
  );
}

export default LoginForm;