import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
   <div className="h-screen w-full flex flex-col items-center justify-center bg-[#062c26] text-white overflow-hidden relative">
      {/* მთავარი კონტენტი */}
      <div className="text-center z-10 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-7xl text-emerald-400 font-black mb-4 tracking-tighter drop-shadow-sm">
          Study Hub
        </h1>
        <p className="text-emerald-100/80 text-xl mb-12 font-light tracking-wide">
          Your all-in-one <span className="text-emerald-400 font-semibold">AI powered</span> study companion.
        </p>
        
        <button 
          onClick={() => navigate("/dashboard")}
          className="px-12 py-4 bg-emerald-500 text-[#062c26] rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all active:scale-95"
        >
          Let's Start
        </button>
      </div>

      {/* დეკორატიული ელემენტები (ბუნდოვანი წრეები) უფრო ლამაზი ფერებისთვის */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-emerald-800/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[5%] right-[2%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-[40%] right-[10%] w-32 h-32 bg-emerald-400/10 rounded-full blur-[60px]"></div>

      {/* ძალიან დახვეწილი ხაზოვანი ბადე (სურვილისამებრ, ტექსტურისთვის) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, size: '30px 30px', backgroundSize: '40px 40px' }}>
      </div>
    </div>
  );
}

export default Landing;