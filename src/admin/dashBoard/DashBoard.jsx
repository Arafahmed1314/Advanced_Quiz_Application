import CreateNewQuiz from "./CreateNewQuiz";
import DashBoardHeader from "./DashBoardHeader";
import NewQuizList from "./NewQuizList";

function DashBoard() {
  return (
    // <div className="bg-gray-100 min-h-screen flex">
    //   <DashBoardHeader />
    <main className="flex-grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">Welcome Back To Your Quiz Hub!</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreateNewQuiz />
        <NewQuizList />
      </div>
    </main>
    // </div>
  );
}

export default DashBoard;
