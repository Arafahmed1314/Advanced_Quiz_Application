import { Link } from "react-router-dom";

function QuizSetUpperPart() {
  return (
    <Link
      to="/admin"
      className="inline-flex items-center text-sm text-gray-600 mb-6 hover:text-buzzr-purple"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      Back to home
    </Link>
  );
}

export default QuizSetUpperPart;
