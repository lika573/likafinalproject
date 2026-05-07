function Cardstate() {
  const statsData = [
    { id: 1, title: "Total Notes", value: 24, trend: "+3 this week" },
    { id: 2, title: "Study Groups", value: 5, trend: "2 active now" },
    { id: 3, title: "Study Hours", value: 18.5, trend: "+2.5 hours" },
    { id: 4, title: "Quiz Score", value: "87%", trend: "+5% from last" },
  ];

  return (
    <div className="w-full px-2">
      <div className="mb-10 ml-2 text-left">
        <h1 className="text-4xl text-white font-black leading-tight tracking-tighter">
          Welcome back, <span className="text-emerald-500">Student</span>
        </h1>
        <p className="text-emerald-100/40 mt-2 text-lg font-medium">
          Here's what's happening with your studies today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="group relative   bg-gradient-to-br from-[#0a1f1c] to-[#040d0c] p-6 rounded-[2.5rem] border border-emerald-900/20 flex flex-col items-start transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>

            <h3 className="text-4xl text-emerald-400 font-black tracking-tighter leading-none mb-3">
              {item.value}
            </h3>

            <p className="text-emerald-50 text-xl font-bold mb-4">
              {item.title}
            </p>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <span className="text-emerald-500/60 text-xs font-bold tracking-widest uppercase">
                {item.trend}
              </span>
            </div>

            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cardstate;
