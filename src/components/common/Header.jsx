import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  return (
    <header className="flex justify-between items-center mb-12">
      <img src={logo} className="h-7" alt="Logo" />
      <div>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          style={{ fontFamily: "Jaro" }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setAuth({});
            navigate("/");
          }}
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors ml-2"
          style={{ fontFamily: "Jaro" }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;