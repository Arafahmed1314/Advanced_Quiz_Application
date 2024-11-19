import { useNavigate } from "react-router-dom";
import avatar from "../../assets/logo.svg";
import { useAuth } from "../../context/AuthContext";
function QuizeHeader() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    setAuth({});
    navigate("/");
  };
  return (
    <header className="flex justify-between items-center mb-8">
      <img src={avatar} className="h-7" />
      <button
        onClick={handleLogOut}
        className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
        // style="font-family: Jaro"
        style={{ fontFamily: "Jaro" }}
      >
        Logout
      </button>
    </header>
  );
}

export default QuizeHeader;
