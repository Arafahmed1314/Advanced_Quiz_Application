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

  console.log(questions);

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
  const handleNextQuestion = () => {
    console.log("works");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate(`/quizResult/${id}`);
    }
  };

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <QuizeHeader />
        <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
            {/* Pass questions or data to child components if needed */}
            <PlayQuizeLeft questions={questions} />
            <PlayQuizeRight
              onNext={handleNextQuestion}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              question={questions[currentQuestionIndex]}
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
