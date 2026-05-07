import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../comp/nav/Navigation";
import Setting from "../pages/Setting/Settings";
import Notes from "../pages/notes/Notes";
import Dashboard from "../pages/Dashboard/Dashboard";
import AI from "../pages/AI/AI";
import Library from "../pages/Libery/Library";
import Group from "../pages/Group/Groups";
import User from "../pages/users/user";
import Landing from "../components/landing";

function StudyContent() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
   <div className="flex h-screen overflow-hidden bg-[#020d0c]"> 
  {!isLandingPage && (
    <div className="w-64 bg-[#051614] flex flex-col border-r border-emerald-900/30 shadow-xl">
      <div className="p-6">
        <h1 className="text-left text-emerald-500 text-xl font-black mb-6 uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
          Study Hub
        </h1>
        <Navigation />
      </div>
    </div>
  )}

  <div className="flex-1 overflow-y-auto bg-[#020d0c] relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="relative z-10">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/Group" element={<Group />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  </div>
</div>
  );
}

function Study() {
  return (
    <BrowserRouter>
      <StudyContent />
    </BrowserRouter>
  );
}

export default Study;
