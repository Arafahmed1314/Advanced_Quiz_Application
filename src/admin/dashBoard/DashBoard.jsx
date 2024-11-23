import { useEffect, useState } from "react";
import CreateNewQuiz from "./CreateNewQuiz";
import NewQuizList from "./NewQuizList";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { showDeleteSuccess } from "../../utils/toast";

function DashBoard() {
  const [quizzes, setQuizzes] = useState([]); // Fixed typo in variable name
  const { auth } = useAuth();
  const { authToken } = auth;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin/quizzes`,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        setQuizzes(response.data); // Directly set response data
        console.log("Fetched quizzes:", response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchData();
  }, [authToken]);
  const handleDelete = (id) => {
    const newData = quizzes.filter((quiz) => quiz.id != id);
    showDeleteSuccess();
    setQuizzes(newData);
  };
  return (
    <main className="flex-grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">Welcome Back To Your Quiz Hub!</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreateNewQuiz />
        {quizzes?.map((quiz) => (
          <NewQuizList
            key={quiz.id}
            status={quiz.status}
            title={quiz.title}
            id={quiz.id}
            onDelete={handleDelete}
            description={quiz.description}
          />
        ))}
      </div>
    </main>
  );
}

export default DashBoard;
