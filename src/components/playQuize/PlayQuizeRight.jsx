function PlayQuizeRight({ question, onNext, isLastQuestion }) {
  console.log(question);
  if (!question) {
    return <p className="text-center text-lg">No question available.</p>;
  }

  return (
    <div className="lg:col-span-2 bg-white">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Q: {question.question}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Render Options */}
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                className="form-radio text-buzzr-purple"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={onNext}
          className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
        >
          {isLastQuestion ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default PlayQuizeRight;
