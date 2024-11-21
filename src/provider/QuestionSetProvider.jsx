import { useState } from "react";
import { QuestionSetContext } from "../context/QuestionSetContext";

const QuestionSetProvider = ({ children }) => {
  const [questionSet, setQuestionSet] = useState([]);
  const [updateQuiz, setUpdateQuiz] = useState(null);
  return (
    <QuestionSetContext.Provider
      value={{ questionSet, setQuestionSet, updateQuiz, setUpdateQuiz }}
    >
      {children}
    </QuestionSetContext.Provider>
  );
};
export default QuestionSetProvider;
