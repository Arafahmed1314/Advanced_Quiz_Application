function QuizResultRight({ question, index, submitted_answers }) {
  return (
    // <div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
    //   <div className="h-[calc(100vh-50px)] overflow-y-scroll ">
    <div className="px-4">
      {/* <!-- Question One --> */}
      <div className="rounded-lg overflow-hidden shadow-sm mb-4">
        <div className="bg-white p-6 !pb-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {index + 1}. {question.question}
            </h3>
          </div>
          <div className="space-y-2">
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center space-x-3 ${
                  question.correctAnswer === option
                    ? "text-green-500" // Correct option
                    : submitted_answers[index]?.answer === option
                    ? "text-red-500" // Incorrect option selected by user
                    : "text-black" // Neutral state for unselected options
                }`}
              >
                <input
                  type="radio"
                  // name="answer1"
                  className="form-radio text-buzzr-purple"
                  checked={submitted_answers[index]?.answer === option}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 bg-primary/10 px-6 py-2">
          <button className="text-red-600 hover:text-red-800 font-medium">
            Delete
          </button>
          <button className="text-primary hover:text-primary/80 font-medium">
            Edit Question
          </button>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default QuizResultRight;
