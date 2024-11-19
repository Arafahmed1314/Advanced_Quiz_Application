import LoginLeftSide from "../components/login/LoginLeftSide";
import LoginRightSide from "../components/login/LoginRightSide";

function LoginPages() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <div className="flex min-h-screen">
        {/* <!-- Left side --> */}
        <LoginLeftSide />

        {/* <!-- Right side --> */}
        <LoginRightSide />
      </div>
    </div>
  );
}

export default LoginPages;
