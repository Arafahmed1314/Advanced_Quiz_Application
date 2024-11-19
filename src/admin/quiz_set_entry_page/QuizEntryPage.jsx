import QuizEntryLeft from "./QuizEntryLeft";
import QuizEntryNav from "./QuizEntryNav";
import QuizEntryRight from "./QuizEntryRight";

function QuizEntryPage() {
  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div>
        <QuizEntryNav />

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12">
          {/* <!-- Left Column --> */}
          <QuizEntryLeft />

          {/* <!-- Right Column --> */}
          <QuizEntryRight />
        </div>
      </div>
    </main>
  );
}

export default QuizEntryPage;
