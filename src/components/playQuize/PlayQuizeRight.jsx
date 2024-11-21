/* eslint-disable react/prop-types */

function PlayQuizeRight({
  question,
  onNext,
  isLastQuestion,
  onSelectOption,
  selectedOption,
  isSubmitting,
}) {
  if (!question) {
    return <p className="text-center text-lg">No question available.</p>;
  }

  const handleOptionChange = (option) => {
    onSelectOption(question.id, option);
  };

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
              className={`flex items-center space-x-3 py-3 px-4 rounded-md text-lg cursor-pointer ${
                selectedOption === option ? "bg-primary/10" : "bg-primary/5"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="form-radio text-buzzr-purple"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={onNext}
          disabled={isSubmitting || !selectedOption}
          className={`w-1/2 text-center ml-auto block py-2 px-4 rounded-md font-semibold my-8 ${
            selectedOption
              ? "bg-primary text-white hover:bg-indigo-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isSubmitting
            ? "Submitting..."
            : isLastQuestion
            ? "Finish Quiz"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

export default PlayQuizeRight;
