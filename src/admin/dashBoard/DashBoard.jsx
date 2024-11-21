import { useEffect, useState } from "react";
import CreateNewQuiz from "./CreateNewQuiz";

import NewQuizList from "./NewQuizList";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function DashBoard() {
  const [queizzes, setQuiezes] = useState();
  const { auth } = useAuth();
  const { authToken } = auth;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/admin/quizzes`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      console.log("Question updated successfully!", response);
    };
    fetchData();
  }, []);
  return (
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
