function Action() {
  const activeGroups = [
    {
      id: 1,
      name: "Blank Document",
      status: "Start a new or document",
    },
    {
      id: 2,
      name: "Record Audio",
      status: "Record lecture or voice notes",
    },
    {
      id: 3,
      name: "Upload Document",
      status: "Upload PDF, DOCX, or other files",
    },
    {
      id: 4,
      name: "Add Video Link",
      status: "YouRube or other video link",
    },
  ];

  return (
    <div className="w-full max-w-7xl px-4 py-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-8 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
        <h1 className="text-2xl font-black text-white tracking-tight">
          Quick Actions
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeGroups.map((act) => (
          <div
            key={act.id}
            className="group relative bg-[#0a1f1c] p-7 rounded-[2.5rem] border border-emerald-900/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>

            <div className="relative z-10 flex flex-col items-start">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mb-4 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>

              <h3 className="font-bold text-emerald-50 text-xl mb-2 group-hover:text-emerald-400 transition-colors">
                {act.name}
              </h3>

              <p className="text-emerald-500/60 text-sm font-medium tracking-wide uppercase text-[10px]">
                {act.status}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Action;
