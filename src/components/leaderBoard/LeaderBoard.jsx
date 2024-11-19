import Header from "../common/Header";
// import logo from "../../assets/logo.svg";
import LeaderBoardLeft from "./LeaderBoardLeft";
import LeaderBoardRight from "./LeaderBoardRight";
function LeaderBoard() {
  return (
    <div className="bg-[#F5F3FF]  p-4">
      <Header />
      <main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Left Column --> */}
            <LeaderBoardLeft />

            {/* <!-- Right Column --> */}
            <LeaderBoardRight />
          </div>
        </div>
      </main>
    </div>
  );
}

export default LeaderBoard;
