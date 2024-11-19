function QuizEntryLeft() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-4">Binary Tree Quiz</h2>
      <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
        Total number of questions : 1
      </div>
      <p className="text-gray-600 mb-4">
        Test understanding of binary tree traversal methods, tree properties,
        and algorithms.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Create Quiz</h2>

        <div>
          <label
            htmlFor="quizTitle"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Question Title
          </label>
          <input
            type="text"
            id="quizTitle"
            name="quizTitle"
            className="w-full mt-2 p-2 border border-input rounded-md bg-background text-foreground"
            placeholder="Enter quiz title"
          />
        </div>

        <p className="text-sm text-gray-600 mt-4">Add Options</p>

        <div id="optionsContainer" className="space-y-2 mt-4">
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              type="checkbox"
              id="option0"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option0" className="sr-only">
              Option 1
            </label>
            <input
              type="text"
              id="optionText0"
              name="optionText0"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 1"
            />
          </div>

          {/* <!-- Option 2 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              type="checkbox"
              id="option2"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option0" className="sr-only">
              Option 2
            </label>
            <input
              type="text"
              id="optionText2"
              name="optionText2"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 2"
            />
          </div>

          {/* <!-- Option 2 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              type="checkbox"
              id="option3"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option3" className="sr-only">
              Option 3
            </label>
            <input
              type="text"
              id="optionText3"
              name="optionText3"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 3"
            />
          </div>

          {/* <!-- Option 4 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              type="checkbox"
              id="option4"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option4" className="sr-only">
              Option 4
            </label>
            <input
              type="text"
              id="optionText4"
              name="optionText4"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 4"
            />
          </div>
        </div>
        <button className="w-full bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">
          Save Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizEntryLeft;
