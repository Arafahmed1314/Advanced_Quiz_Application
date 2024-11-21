/* eslint-disable react/prop-types */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useQuestionSetContext } from "../../context/QuestionSetContext";

function QuizEntryLeft({ formData, id }) {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { questionSet, updateQuiz, setUpdateQuiz, setQuestionSet } =
    useQuestionSetContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questionTitle: "",
      options: [
        { text: "", isCorrect: true }, // First option initially checked
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  });

  const options = watch("options");

  // Populate form fields with updateQuiz data when available
  useEffect(() => {
    if (updateQuiz) {
      setValue("questionTitle", updateQuiz.question || "");
      updateQuiz.options.forEach((option, index) => {
        setValue(`options.${index}.text`, option);
        setValue(
          `options.${index}.isCorrect`,
          option === updateQuiz.correctAnswer
        );
      });
    } else {
      reset({
        questionTitle: "",
        options: [
          { text: "", isCorrect: true },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      });
    }
  }, [updateQuiz, setValue, reset]);

  const handleCheckboxChange = (index) => {
    options.forEach((_, i) => {
      setValue(`options.${i}.isCorrect`, i === index); // Ensure only one checkbox is true
    });
  };

  const onSubmit = async (data) => {
    const correctOption = data.options.find((option) => option.isCorrect);
    if (!correctOption) {
      console.error("Please select at least one correct answer.");
      return;
    }

    const formattedData = {
      question: data.questionTitle,
      options: data.options.map((option) => option.text), // Just the option texts
      correctAnswer: correctOption.text, // Set the correct answer
    };

    try {
      setIsLoading(true); // Show loading state

      if (updateQuiz) {
        // Update existing question
        const response = await axios.patch(
          `http://localhost:5000/api/admin/questions/${updateQuiz.id}`,
          formattedData,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log("Question updated successfully!", response);

        // Update the questionSet with the modified question
        setQuestionSet((prev) =>
          prev.map((q) =>
            q.id === updateQuiz.id ? { ...q, ...formattedData } : q
          )
        );

        setUpdateQuiz(null); // Reset updateQuiz to switch to "Save Quiz" mode
      } else {
        // Add new question
        const response = await axios.post(
          `http://localhost:5000/api/admin/quizzes/${id}/questions`,
          formattedData,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log("Question added successfully!", response);

        // Add new question to the questionSet
        setQuestionSet((prev) => [...prev, response.data.data]);
      }

      // Reset form after submission
      reset({
        questionTitle: "",
        options: [
          { text: "", isCorrect: true },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      });
    } catch (error) {
      console.error("Submission failed:", error.message);
      console.log(
        updateQuiz
          ? "Failed to update question. Please try again."
          : "Failed to add question. Please try again."
      );
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">{formData.title}</h2>
        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
          {`Total number of questions: ${questionSet.length}`}
        </div>
        <p className="text-gray-600 mb-4">{formData.description}</p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="questionTitle"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Question Title
        </label>
        <input
          {...register("questionTitle", {
            required: "Question title is required",
          })}
          type="text"
          id="questionTitle"
          className={`w-full p-2 border rounded-md ${
            errors.questionTitle ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter question title"
          aria-describedby="questionTitleError"
        />
        {errors.questionTitle && (
          <p id="questionTitleError" className="text-red-500 text-sm mt-1">
            {errors.questionTitle.message}
          </p>
        )}
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-4">Add Options</p>

        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white mb-2"
          >
            <input
              type="checkbox"
              {...register(`options.${index}.isCorrect`)}
              className="w-4 h-4"
              checked={options[index]?.isCorrect || false}
              onChange={() => handleCheckboxChange(index)}
            />
            <input
              {...register(`options.${index}.text`, {
                required: "Option text is required",
              })}
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none"
              placeholder={`Option ${index + 1}`}
            />
            {errors.options?.[index]?.text && (
              <p className="text-red-500 text-sm mt-1">
                {errors.options[index].text.message}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-primary text-white py-2 rounded-md hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : updateQuiz ? "Update Quiz" : "Save Quiz"}
      </button>
    </form>
  );
}

export default QuizEntryLeft;
