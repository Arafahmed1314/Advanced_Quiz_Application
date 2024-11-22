/* eslint-disable react/prop-types */
function QuizResultRight({
  question,
  index,
  submittedAnswer,
  correctAnswer,
  status,
}) {
  return (
    <div className="px-4">
      {/* Question Card */}
      <div className="rounded-lg overflow-hidden shadow-sm mb-4">
        {/* Question Content */}
        <div className="bg-white p-6 !pb-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {index + 1}. {question.question}
            </h3>
          </div>
          <div className="space-y-2">
            {question.options.map((option, idx) => (
              <label
                key={idx}
                className={`flex items-center space-x-3 ${
                  correctAnswer === option
                    ? "text-green-500 font-bold" // Highlight correct answer
                    : submittedAnswer === option
                    ? "text-red-500 font-bold" // Highlight incorrect submission
                    : "text-black"
                }`}
              >
                <input
                  type="radio"
                  className="form-radio text-buzzr-purple"
                  checked={submittedAnswer === option}
                  readOnly
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Status Section */}
        <div className="px-6 py-2 flex justify-between items-center bg-primary/10">
          <p
            className={`font-medium ${
              status === "correct"
                ? "text-green-500"
                : status === "incorrect"
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {status === "not answered"
              ? "Not Answered"
              : status === "correct"
              ? "Correct"
              : "Incorrect"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizResultRight;
