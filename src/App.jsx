import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPages from "./pages/LoginPages";
import NotFound from "./components/NotFound";
import QuizResult from "./components/quizResult/QuizResult";
import PlayQuize from "./components/playQuize/PlayQuize";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";
import DashBoard from "./admin/dashBoard/DashBoard";
import QuizEntryPage from "./admin/quiz_set_entry_page/QuizEntryPage";
import QuizSetPage from "./admin/quiz_set_page/QuizSetPage";
import AdminRoutes from "./routes/AdminRoutes";
import UserPrivateRoutes from "./routes/UserPrivateRoutes";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<Registration />} />
        <Route element={<UserPrivateRoutes />}>
          <Route path="playquiz/:id" element={<PlayQuize />}></Route>
          <Route path="quizResult/:id" element={<QuizResult />} />
          <Route path="leaderBoard/:id" element={<LeaderBoard />} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="admin" element={<DashBoard />} />
          <Route path="quiz_entry_page" element={<QuizEntryPage />} />
          <Route path="quiz_set_page" element={<QuizSetPage />} />
        </Route>
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
