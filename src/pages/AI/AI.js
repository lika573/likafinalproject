import SaveAichat from "../../components/Saveaichat";
import ai from "../../ficture/ai-technology.png";
import send from "../../ficture/message.png";

function AI() {
  return (
 <div className="flex h-screen overflow-hidden bg-white">
      {/* მარცხენა მენიუ */}
      <SaveAichat />

      {/* მარჯვენა ჩეთის მხარე */}
      <div className="flex-1 flex flex-col h-full">
        
        {/* Header - ფიქსირებული სიმაღლე */}
        <header className="p-6 border-b border-gray-200 bg-gray-50 flex items-start">
          <div className="flex gap-5">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-2xl">
              <img src={ai} alt="ai" className="w-7 h-7" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-slate-800">
                Study Plan for Finals
              </h2>
              <p className="text-sm text-slate-400">AI Study Assistant</p>
            </div>
          </div>
        </header>

        {/* Main Chat Area - flex-1 ავტომატურად იკავებს დარჩენილ ადგილს */}
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* AI მესიჯი */}
          <div className="flex flex-col items-start">
            <div className="flex mb-1">
              <img src={ai} alt="ai" className="w-6 h-6" />
            </div>
            <p className="max-w-[70%] bg-gray-100 text-slate-700 rounded-2xl rounded-tl-none p-4 ml-10 text-sm shadow-sm leading-relaxed">
              Hello! I'm your AI study assistant. I can help you with
              understanding concepts, creating study guides, generating quiz
              questions, and more. How can I help you today?
            </p>
          </div>

          {/* მომხმარებლის მესიჯი */}
          <div className="flex flex-col items-end">
            <p className="max-w-[70%] bg-indigo-600 text-white rounded-2xl rounded-tr-none p-4 text-sm shadow-sm">
              Help me create a study schedule for my finals
            </p>
          </div>
        </main>

        {/* Input Area - ყოველთვის ეკრანის ბოლოშია mt-150-ის გარეშე */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            <div className="flex-1 flex items-center bg-slate-100/70 rounded-2xl px-4 py-1">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-transparent border-none py-3 px-2 text-sm outline-none focus:ring-0"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0">
                <img src={send} alt="send" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AI;
