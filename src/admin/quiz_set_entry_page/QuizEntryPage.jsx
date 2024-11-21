import { useLocation } from "react-router-dom";
import QuizEntryLeft from "./QuizEntryLeft";
import QuizEntryNav from "./QuizEntryNav";
import QuizEntryRight from "./QuizEntryRight";
import { useQuestionSetContext } from "../../context/QuestionSetContext";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function QuizEntryPage() {
  const { questionSet } = useQuestionSetContext();
  const location = useLocation();
  const { formData, id } = location.state;
  const { auth } = useAuth();
  const { authToken } = auth;

  const handlePublish = async () => {
    const obj = {
      status: "published",
      title: formData.title,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/admin/quizzes/${id}`,
        obj, // Direct object
        {
          headers: { Authorization: `Bearer ${authToken}` }, // Correct token format
        }
      );
      console.log("Quiz published successfully!", response.data);
      alert("Quiz published successfully!");
    } catch (error) {
      console.error("Failed to publish quiz:", error.message);
      alert("Failed to publish quiz. Please try again.");
    }
  };

  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      {/* Quiz Navigation */}
      <QuizEntryNav />

      {/* Publish Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handlePublish}
          className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-primary/90 focus:outline-none"
        >
          Publish Quiz
        </button>
      </div>

      {/* Quiz Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12">
        <QuizEntryLeft formData={formData} id={id} />
        <div className="px-4">
          <div className="rounded-lg overflow-hidden shadow-sm mb-4">
            {questionSet.map((q, index) => (
              <QuizEntryRight key={index} index={index} question={q} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuizEntryPage;
