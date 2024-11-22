import { useAuth } from "../context/AuthContext";
import { useGetAllQuiz } from "../hook/useGetAllQuiz";
import Header from "./common/Header";
import Footer from "./Footer";
import Profile from "./Profile";
import QuizList from "./quiz/QuizList";

function Home() {
  const { auth } = useAuth();
  //   console.log(auth);
  const { quizzes, error, loading } = useGetAllQuiz();

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Header />

        {auth.user && <Profile />}
        {/* <QuizResult /> */}
        <QuizList />
        <Footer />
      </div>
      ;
    </div>
  );
}

export default Home;
