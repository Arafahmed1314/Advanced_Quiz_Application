import logo from "../../assets/avater.webp";

function LeaderBoardRight() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <p className="mb-6">React Hooks Quiz</p>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="SPD Smith"
              className="object-cover w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">SPD Smith</h3>
              <p className="text-sm text-gray-500">1st</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">2,340</span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="JE Root"
              className="object-cover w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">JE Root</h3>
              <p className="text-sm text-gray-500">2nd</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">2,540</span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="AN Cook"
              className="object-cover w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">AN Cook</h3>
              <p className="text-sm text-gray-500">3rd</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">1,911</span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="KS Williamson"
              className="object-cover w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">KS Williamson</h3>
              <p className="text-sm text-gray-500">4th</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">1,851</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LeaderBoardRight;
