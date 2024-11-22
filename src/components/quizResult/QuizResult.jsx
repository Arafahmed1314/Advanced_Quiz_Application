import { useParams } from "react-router-dom";
import logo from "../../assets/logo-white.svg";
import QuizResultLeft from "./QuizResultLeft";
import QuizResultRight from "./QuizResultRight";
import { useGetResult } from "../../hook/useGetResult";
import { useGetAllQuestion } from "../../hook/useGetAllQuestion";
import { useAuth } from "../../context/AuthContext";
import { calculateAttemptStats } from "../../utils/utils";

function QuizResult() {
  const { auth } = useAuth();
  const { user } = auth;
  // console.log(user.id);

  const { id } = useParams(); // Get the quiz ID from the URL
  const { result, loading, error } = useGetResult(id); // Fetch the result
  const { questions } = useGetAllQuestion(id); // Fetch all questions
  const { correctCount, wrongCount } = calculateAttemptStats(result, user);
  const myAttempt = result?.attempts?.find(
    (attempt) => attempt?.user?.id === user?.id
  );
  console.log(myAttempt);

  const submitted_answers = myAttempt?.submitted_answers || [];
  const correct_answers = myAttempt?.correct_answers || [];
  const stats = result?.quiz;
  // console.log(result);

  // const { correctCount, wrongCount } = submitted_answers.reduce(
  //   (counts, submitted) => {
  //     const correct = correct_answers.find(
  //       (correct) => correct.question_id === submitted.question_id
  //     )?.answer;

  //     if (submitted.answer === correct) {
  //       counts.correctCount += 1; // Increment correct count
  //     } else {
  //       counts.wrongCount += 1; // Increment wrong count
  //     }

  //     return counts;
  //   },
  //   { correctCount: 0, wrongCount: 0 }
  // );
  const percentage = Math.round(
    (correctCount / (correctCount + wrongCount)) * 100
  );

  const getAnswerStatus = (questionId, answer) => {
    const correctAnswer = correct_answers.find(
      (ans) => ans.question_id === questionId
    );
    return correctAnswer?.answer === answer ? "correct" : "incorrect";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!result) {
    return <div>No results found.</div>;
  }

  return (
    <body className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img
          src={logo}
          className="max-h-11 fixed left-6 top-6 z-50"
          alt="Logo"
        />
        {/* Left side */}
        <QuizResultLeft
          stats={stats}
          correct={correctCount}
          wrong={wrongCount}
          percentages={percentage}
        />

        {/* Right side */}
        <div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
          <div className="h-[calc(100vh-50px)] overflow-y-scroll">
            {questions.map((q, index) => {
              const submittedAnswer = submitted_answers.find(
                (ans) => ans.question_id === q.id
              );

              const answerStatus = submittedAnswer
                ? getAnswerStatus(q.id, submittedAnswer.answer)
                : "not answered";

              return (
                <QuizResultRight
                  key={q.id}
                  question={q}
                  index={index}
                  submittedAnswer={submittedAnswer?.answer || "N/A"}
                  correctAnswer={
                    correct_answers.find((ans) => ans.question_id === q.id)
                      ?.answer || "N/A"
                  }
                  status={answerStatus} // Pass the status (correct, incorrect, or not answered)
                />
              );
            })}
          </div>
        </div>
      </div>
    </body>
  );
}

export default QuizResult;
