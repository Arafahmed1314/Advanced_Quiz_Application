import { Link } from "react-router-dom";

import AddIcon from "../../svg/AddIcon";

function CreateNewQuiz() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 group cursor-pointer hover:shadow-lg transition-shadow">
      <Link to="/quiz_set_page" className="group">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-transform">
          <AddIcon />
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform truncate">
          Create a new quiz
        </h3>
        <p className="text-gray-600 text-sm group-hover:scale-105 transition-transform line-clamp-3">
          Build from the ground up
        </p>
      </Link>
    </div>
  );
}

export default CreateNewQuiz;
