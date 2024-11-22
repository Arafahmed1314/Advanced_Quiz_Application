/* eslint-disable react/prop-types */
import logo from "../../assets/avater.webp";
import { useAuth } from "../../context/AuthContext";
import { sortedData } from "../../utils/sortedLeaderboard";

function LeaderBoardLeft({ correct, wrong, result }) {
  const sortedLeaderboard = sortedData(result); // Get sorted leaderboard data
  const { auth } = useAuth();
  const { user } = auth;

  // Find user position in the leaderboard
  const userPosition = sortedLeaderboard?.findIndex(
    (entry) => entry.user.id === user.id
  );

  // Add 1 to the index since positions are 1-based
  const position = userPosition >= 0 ? userPosition + 1 : "Not Ranked";

  return (
    <div className="bg-primary rounded-lg p-6 text-white">
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="Profile Pic"
          className="w-20 h-20 rounded-full border-4 border-white mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold">{user.full_name}</h2>
        <p className="text-xl">
          {position} {position === "Not Ranked" ? "" : "Position"}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm opacity-75">Mark</p>
          <p className="text-2xl font-bold">{(correct + wrong) * 5}</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-75">Correct</p>
          <p className="text-2xl font-bold">{correct * 5}</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-75">Wrong</p>
          <p className="text-2xl font-bold">{wrong * 5}</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardLeft;
