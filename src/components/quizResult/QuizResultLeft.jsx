/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";

import CircularProgressBar from "./CircularProgressBar";

function QuizResultLeft({ stats, correct, wrong, percentages }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleViewLeaderBoard = () => {
    navigate(`/leaderBoard/${id}`);
  };
  return (
    <div className="max-h-screen overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative">
      <div>
        <div className="text-white">
          <div>
            <h2 className="text-4xl font-bold mb-2">React Hooks Quiz</h2>
            <p>
              A quiz on React hooks like useState, useEffect, and useContext.{" "}
            </p>
          </div>

          <div className="my-6 flex items-center  ">
            <div className="w-1/2">
              <div className="flex gap-6 my-6">
                <div>
                  <p className="font-semibold text-2xl my-0">
                    {stats?.total_questions}
                  </p>
                  <p className="text-gray-300">Questions</p>
                </div>

                <div>
                  <p className="font-semibold text-2xl my-0">{correct}</p>
                  <p className="text-gray-300">Correct</p>
                </div>

                <div>
                  <p className="font-semibold text-2xl my-0">{wrong}</p>
                  <p className="text-gray-300">Wrong</p>
                </div>
              </div>

              <button
                onClick={handleViewLeaderBoard}
                className=" bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white"
              >
                View Leaderboard
              </button>
            </div>

            <div className="w-1/2 bg-primary/80 rounded-md border border-white/20 flex items-center p-4">
              <div className="flex-1">
                <p className="text-2xl font-bold">
                  {correct * 5}/{stats?.total_marks}
                </p>
                <p>Your Mark</p>
              </div>
              <div>{<CircularProgressBar percentages={percentages} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizResultLeft;
