import { useParams } from "react-router-dom";
import Header from "../common/Header";
// import logo from "../../assets/logo.svg";
import LeaderBoardLeft from "./LeaderBoardLeft";
import LeaderBoardRight from "./LeaderBoardRight";
import { useGetResult } from "../../hook/useGetResult";
import { useAuth } from "../../context/AuthContext";
import { calculateAttemptStats } from "../../utils/utils";
function LeaderBoard() {
  const { id } = useParams();
  const { auth } = useAuth();
  const { user } = auth;
  const { result, loading, error } = useGetResult(id);

  const { correctCount, wrongCount } = calculateAttemptStats(result, user);
  console.log(correctCount, wrongCount);

  return (
    <div className="bg-[#F5F3FF]  p-4">
      <Header />
      <main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Left Column --> */}
            <LeaderBoardLeft
              correct={correctCount}
              wrong={wrongCount}
              result={result}
            />

            {/* <!-- Right Column --> */}
            <LeaderBoardRight result={result} loading={loading} error={error} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default LeaderBoard;
