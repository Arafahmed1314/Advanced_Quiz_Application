import { createContext, useContext } from "react";

const QuestionSetContext = createContext();
const useQuestionSetContext = () => {
    return useContext(QuestionSetContext);
}

export { QuestionSetContext, useQuestionSetContext };