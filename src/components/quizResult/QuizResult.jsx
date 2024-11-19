import logo from "../../assets/logo-white.svg";
import QuizResultLeft from "./QuizResultLeft";
import QuizResultRight from "./QuizResultRight";
function QuizResult() {
  return (
    <body className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img src={logo} className="max-h-11 fixed left-6 top-6 z-50" />
        {/* <!-- Left side --> */}
        <QuizResultLeft />

        {/* <!-- Right side --> */}
        <QuizResultRight />
      </div>
    </body>
  );
}

export default QuizResult;
