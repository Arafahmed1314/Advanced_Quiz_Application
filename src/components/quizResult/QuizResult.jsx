import { useParams } from "react-router-dom";
import logo from "../../assets/logo-white.svg";
import QuizResultLeft from "./QuizResultLeft";
import QuizResultRight from "./QuizResultRight";
import { useGetResult } from "../../hook/useGetResult";
import { useGetAllQuestion } from "../../hook/useGetAllQuestion";
import { useEffect, useState } from "react";

function QuizResult() {
  // const [stats, setStats] = useState([]);
  const { id } = useParams(); // Get the quiz ID from the URL
  const { result, loading, error } = useGetResult(id); // Fetch the result
  const { questions } = useGetAllQuestion(id); // Fetch all questions

  // // Set the fetched result into local state when it changes
  console.log(result?.stats);

  // Safely retrieve submitted_answers
  const submitted_answers = result?.attempts?.[0]?.submitted_answers || [];
  const stats = result?.stats;
  // useEffect(() => {
  //   setStats(result?.stats);
  // }, [result]);

  // Handle loading, error, or empty state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!result) {
    return <div>No results found.</div>;
  }
  // console.log(results);

  return (
    <body className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img
          src={logo}
          className="max-h-11 fixed left-6 top-6 z-50"
          alt="Logo"
        />
        {/* Left side */}
        <QuizResultLeft stats={stats} />

        {/* Right side */}
        <div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
          <div className="h-[calc(100vh-50px)] overflow-y-scroll">
            {/* Loop through questions and pass submitted answers */}
            {questions.map((q, index) => (
              <QuizResultRight
                key={q.id}
                question={q}
                index={index}
                submitted_answers={submitted_answers} // Pass submitted answers here
              />
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}

export default QuizResult;
