import useadd from "../ficture/add-user.png";
import search from "../ficture/search.png";

function Adduser() {
  const usersList = [
    {
      id: 1,
      name: "Ana Beridze",
      initials: "AB",
      role: "Computer Science",
      year: "3rd Year",
      email: "ana.beridze@studyhub.ai",
      status: "online",
      type: "student",
    },
    {
      id: 2,
      name: "Giorgi Nikoladze",
      initials: "GN",
      role: "Mathematics",
      year: "2nd Year",
      email: "giorgi.n@studyhub.ai",
      status: "online",
      type: "student",
    },
    {
      id: 3,
      name: "Mariam Gelashvili",
      initials: "MG",
      role: "Physics",
      year: "4th Year",
      email: "mariam.g@studyhub.ai",
      status: "away",
      type: "tutor",
    },
    {
      id: 4,
      name: "Luka Berdize",
      initials: "LB",
      role: "Chemistry",
      year: "4th year",
      email: "luka.b@study.hub",
      status: "offline",
      type: "student",
    },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden ">
      <div className="w-80 border-r border-gray-200 flex flex-col ">
        <div className="p-6">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-bold text-slate-800">Users</h2>
            <button className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all">
              <img src={useadd} alt="useradd" className="w-5 h-5" />
            </button>
          </div>
          <div className="place-items-start">
            <p className="text-slate-400 text-sm mb-6">10 users • 6 online</p>
          </div>

          <div className="flex gap-2 mb-6">
            <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-xl font-bold text-slate-800">7</p>
              <p className="text-[10px] text-slate-400">Students</p>
            </div>
            <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-xl font-bold text-slate-800">2</p>
              <p className="text-[10px] text-slate-400">Tutors</p>
            </div>
            <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-xl font-bold text-slate-800">6</p>
              <p className="text-[10px] text-slate-400">Online</p>
            </div>
          </div>

          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              <img src={search} alt="search" className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="flex gap-2 ">
            <select className="flex-1 bg-slate-50 text-xs font-medium p-2 rounded-lg outline-none cursor-pointer">
              <option>All Roles</option>
              <option>Students</option>
              <option>Tutors</option>
              <option>Mentors</option>
            </select>
            <select className="flex-1 bg-slate-50 text-xs font-medium p-2 rounded-lg outline-none cursor-pointer">
              <option>All Status</option>
              <option>online</option>
              <option>Away</option>
              <option>offline</option>
            </select>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto border-t border-gray-100 scrollbar-hide">
          {usersList.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 hover:bg-slate-50 cursor-pointer transition-all border-b border-gray-50 last:border-none group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                  {user.initials}
                </div>
                <div
                  className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white rounded-full ${
                    user.status === "online"
                      ? "bg-green-500"
                      : user.status === "away"
                        ? "bg-yellow-400"
                        : "bg-slate-300"
                  }`}
                ></div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-slate-800 text-sm truncate">
                    {user.name}
                  </h4>
                  <span className="text-slate-400 text-[10px]">
                    {user.type === "student" ? "👥" : "🎓"}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] truncate">
                  {user.role} • {user.year}
                </p>
                <p className="text-slate-400 text-[10px] truncate">
                  {user.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adduser;
