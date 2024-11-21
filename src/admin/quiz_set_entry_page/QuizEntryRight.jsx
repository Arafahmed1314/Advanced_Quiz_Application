import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useQuestionSetContext } from "../../context/QuestionSetContext";

/* eslint-disable react/prop-types */
function QuizEntryRight({ index, question }) {
  const { auth } = useAuth();
  const { setUpdateQuiz } = useQuestionSetContext();
  const { authToken } = auth;
  const { setQuestionSet } = useQuestionSetContext();
  console.log(question.id);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/questions/${question.id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      setQuestionSet((prevQuestionSet) =>
        prevQuestionSet.filter((q) => q.id !== question.id)
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white p-6 !pb-2">
        <h3 className="text-lg font-semibold">
          {index + 1}. {question.question}
        </h3>
        <div className="space-y-2">
          {question.options.map((option, i) => (
            <label key={i} className="flex items-center space-x-3">
              <input
                type="radio"
                name={`answer_${index}`}
                className="form-radio text-buzzr-purple"
                checked={option === question.correctAnswer}
                readOnly
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 bg-primary/10 px-6 py-2">
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Delete
        </button>
        <button
          onClick={() => setUpdateQuiz(question)}
          className="text-primary hover:text-primary/80 font-medium"
        >
          Edit Question
        </button>
      </div>
    </>
  );
}
export default QuizEntryRight;
