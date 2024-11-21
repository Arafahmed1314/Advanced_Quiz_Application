/* eslint-disable react/prop-types */
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function QuizCard({ data }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
  // console.log(data.id);

  const handleNavigate = () => {
    if (auth.user) {
      if (data.is_attempted) {
        navigate(`/quizResult/${data.id}`);
      } else {
        navigate(`/playquiz/${data.id}`);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
    >
      {/* Overlay Content */}
      <div className="group-hover:scale-105 absolute transition-all text-white text-center top-1/2 -translate-y-1/2 px-4">
        <h1 className="text-5xl" style={{ fontFamily: "Jaro" }}>
          {data.title}
        </h1>
        <p className="mt-2 text-lg">{data.description}</p>
      </div>

      {/* Conditional overlay for already participated */}
      {data.is_attempted && (
        <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white hover:grid place-items-center">
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
      )}

      {/* Quiz Thumbnail */}
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full h-full object-cover rounded mb-4"
      />
    </div>
  );
}

export default QuizCard;
