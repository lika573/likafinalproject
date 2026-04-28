import useadd from "../ficture/add-user.png";
import search from "../ficture/search.png"

function Adduser() {
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
      </div>  
     
     
    </div>
  );
}

export default Adduser;
