function Mynotes() {
  const recentNotes = [
    {
      id: 1,
      title: "Chemistry Lab Report.pdf",
      timeAgo: "1d ago",
      Number: "2.4 MB",
    },
    {
      id: 2,
      title: "Lecture Recording - Physics",
      timeAgo: "1d ago",
      Number: "45:32 32.1 MB",
    },
    {
      id: 3,
      title: "Introduction to Quantum Mechanics",
      timeAgo: "3d ago",
      Number: "1:12:45 Video Link",
    },
    {
      id: 4,
      title: "Study Group Discussion",
      timeAgo: "3d ago",
      Number: "28:15 19.8 MB",
    },
  ];

  return (
    <div className="w-full max-w-7xl px-4 py-6 mt-6 lg:mt-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-8 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
        <h1 className="text-2xl font-black text-white tracking-tight">
          Recent Uploads
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentNotes.map((note) => (
          <div
            key={note.id}
            className="group bg-[#0a1f1c] p-4 rounded-[2.5rem] border border-emerald-900/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer flex items-center gap-5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-12 h-12 bg-[#0d2a26] rounded-2xl flex items-center justify-center border border-emerald-800/30 group-hover:bg-emerald-500/20 transition-colors">
              <span className="text-xl">📄</span>
            </div>

            <div className="flex-1 min-w-0 relative z-10">
              <h3 className="font-bold text-emerald-50 text-base truncate group-hover:text-emerald-400 transition-colors">
                {note.title}
              </h3>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 text-emerald-500/50 text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-emerald-500">📅</span> {note.timeAgo}
                </div>

                <div className="px-2 py-0.5 bg-emerald-950/50 border border-emerald-800/30 rounded-md text-[10px] text-emerald-400 font-bold">
                  {note.Number}
                </div>

                <span className="text-emerald-500 hover:text-emerald-300 text-[11px] font-black underline decoration-emerald-500/30 underline-offset-4 transition-colors">
                  Video Link
                </span>
              </div>
            </div>

            <div className="text-emerald-900 group-hover:text-emerald-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mynotes;
