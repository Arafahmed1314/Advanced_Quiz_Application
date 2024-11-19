import { useGetAllQuiz } from "../../hook/useGetAllQuiz";
import QuizCard from "./QuizCard";

function QuizList() {
  const { quizzes, error, loading } = useGetAllQuiz();
  // console.log(quizzes);

  if (loading) {
    return <p>Loading quizzes...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Render quizzes if available
  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizzes?.data?.length > 0 ? (
            quizzes.data.map((data) => (
              <div key={data.id}>
                <QuizCard data={data} />
              </div>
            ))
          ) : (
            <p>No quizzes available.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default QuizList;
