import { Link } from "react-router-dom";
import BackArrow from "../../svg/BackArrow";

function QuizSetUpperPart() {
  return (
    <Link
      to="/admin"
      className="inline-flex items-center text-sm text-gray-600 mb-6 hover:text-buzzr-purple"
    >
      <BackArrow />
      Back to home
    </Link>
  );
}

export default QuizSetUpperPart;
