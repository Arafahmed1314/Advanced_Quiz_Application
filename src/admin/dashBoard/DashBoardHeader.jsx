import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avater.webp";
import logo from "../../assets/logo-white.svg";

import { useAuth } from "../../context/AuthContext";

function DashBoardHeader() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <aside className="min-w-[20%] bg-primary p-6 flex flex-col">
      <div className="mb-10">
        <img src={logo} className="h-7" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <a
              // href="#"
              className="block py-2 px-4 rounded-lg bg-buzzr-purple bg-white text-primary font-bold"
            >
              Quizzes
            </a>
          </li>

          <li>
            <a
              // href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Settings
            </a>
          </li>

          <li>
            <a
              // href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Manage Users
            </a>
          </li>

          <li>
            <a
              // href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Manage Roles
            </a>
          </li>
          <button
            onClick={() => {
              setAuth({});
              navigate("/login");
            }}
          >
            <li>
              <Link className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary">
                Logout
              </Link>
            </li>
          </button>
        </ul>
      </nav>
      <div className="mt-auto flex items-center">
        <img
          src={avatar}
          alt="Mr Hasan"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-white font-semibold">Saad Hasan</span>
      </div>
    </aside>
  );
}

export default DashBoardHeader;
