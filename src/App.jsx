import "./App.css";
import "./index.css";
import Header from "./components/Header";
import ReportSection from "./components/ReportSection";
import GwensReport from "./components/GwensRepor";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ReportSection />

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[20%] bg-[#49243E]"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-2/3">
            <GwensReport />
          </div>

          <div className="w-full md:w-1/3">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
