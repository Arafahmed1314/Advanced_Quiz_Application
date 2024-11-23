import LoginLeftSide from "../login/LoginLeftSide";
import RegistrationRight from "./RegistrationRight";

function Registration() {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="flex min-h-screen max-h-screen">
        <LoginLeftSide />
        <RegistrationRight />
      </div>
    </div>
  );
}

export default Registration;
