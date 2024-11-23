/* eslint-disable react/prop-types */
import logo from "../../assets/avater.webp";
import { useAuth } from "../../context/AuthContext";

function LeaderBoardRight({ result, loading, error }) {
  const { auth } = useAuth();
  const { user } = auth;

  if (loading) {
    return <p>Loading leaderboard...</p>;
  }

  if (error) {
    return <p>Error loading leaderboard: {error.message}</p>;
  }

  const sortedLeaderboard = result?.attempts
    ?.map((attempt) => {
      const correctCount = attempt?.submitted_answers.reduce(
        (count, submitted) => {
          const correctAnswer = attempt?.correct_answers.find(
            (correct) => correct.question_id === submitted.question_id
          )?.answer;

          return submitted.answer === correctAnswer ? count + 1 : count;
        },
        0
      );

      return {
        user: attempt.user,
        correctCount, // Number of correct answers
      };
    })
    .sort((a, b) => b.correctCount - a.correctCount); // Sort by highest score

  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <p className="mb-6">React Hooks Quiz</p>
      <div className="max-h-[400px] overflow-y-auto">
        {" "}
        {/* Add scrollable container */}
        <ul className="space-y-4">
          {sortedLeaderboard?.map((entry, index) => (
            <li
              key={entry.user.id}
              className={`${
                user.id === entry.user.id && index < 5
                  ? "bg-green-400"
                  : "bg-white"
              } flex items-center justify-between p-4 rounded shadow-sm ${
                user.id === entry.user.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-center">
                <img
                  src={logo} // Replace this with the user's avatar if available
                  alt={entry.user.name || "User"}
                  className="object-cover w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">
                    {entry.user.full_name || "Anonymous"}
                  </h3>
                  <p className="text-sm text-gray-500">pos - {index + 1}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-bold">{entry.correctCount * 5}</span>
                {/* <span className="text-sm text-gray-500">Correct Answers</span> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoardRight;
