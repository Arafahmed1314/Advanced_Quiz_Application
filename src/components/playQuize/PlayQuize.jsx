import { useParams } from "react-router-dom";
import PlayQuizeLeft from "./PlayQuizeLeft";
import PlayQuizeRight from "./PlayQuizeRight";
import QuizeHeader from "./QuizeHeader";
import { useGetAllQuestion } from "../../hook/useGetAllQuestion";
import { useAxios } from "../../hook/useAxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlayQuize() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { api } = useAxios();
  const { questions, error, loading } = useGetAllQuestion(id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({}); // Track answers
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for submission

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmitQuiz();
      navigate(`/quizResult/${id}`);
    }
  };

  const handleSubmitQuiz = async () => {
    setIsSubmitting(true);
    // console.log(selectedOptions);
    const payload = {
      answers: selectedOptions, // Directly use the selectedOptions object
    };
    try {
      const response = await api.post(`quizzes/${id}/attempt`, payload);

      console.log("Submission successful:", response.data);
      // Redirect to results page
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Failed to submit quiz. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <p className="text-center text-lg">Loading questions...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-lg">
        Error: {error || "Failed to load quiz data"}
      </p>
    );
  }

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <QuizeHeader />
        <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
            <PlayQuizeLeft
              total={questions.length}
              participated={currentQuestionIndex}
            />
            <PlayQuizeRight
              question={questions[currentQuestionIndex]}
              onNext={handleNextQuestion}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              onSelectOption={handleOptionSelect}
              selectedOption={
                selectedOptions[questions[currentQuestionIndex]?.id]
              }
              isSubmitting={isSubmitting}
            />
          </div>
        </main>
      </div>
      <footer className="mt-6 mb-3 opacity-40 text-center">
        Copyright &copy; 2024 Learn With Sumit | All Rights Reserved
      </footer>
    </div>
  );
}

export default PlayQuize;
