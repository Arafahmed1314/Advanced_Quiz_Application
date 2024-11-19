import GreaterThan from "../../svg/GreaterThan";

function QuizEntryNav() {
  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <a href="#" className="text-gray-600 hover:text-buzzr-purple">
            Home
          </a>
          <GreaterThan />
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-buzzr-purple"
            aria-current="page"
          >
            Quizzes
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default QuizEntryNav;
