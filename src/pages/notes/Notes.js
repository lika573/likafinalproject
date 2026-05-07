import italic from "../../ficture/italic.png";
import letter from "../../ficture/letter-b.png";
import list from "../../ficture/list.png";
import plane from "../../ficture/paper-plane (1).png";
import share from "../../ficture/share.png";
import Savednote from "../../components/savednote";
import { useState } from "react";

function Notes() {
  const [noteslist, setNotelist] = useState([]);
  const [title, setTitel] = useState("");
  const [content, setContent] = useState("");

  const handSave = () => {
    if (!title.trim() && !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title: title || "Untitled Note",
      preview: content.substring(0, 40) + "...",
      date: new Date().toLocaleDateString(),
    };

    setNotelist([newNote, ...noteslist]);
    setTitel("");
    setContent("");
  };
  const handAdd = () => {
    setTitel("");
    setContent("");
  };
  const openNote = (note) => {
    setTitel(note.title);
    setContent(note.content);
  };
  const deletNote = (id) => {
    setNotelist(noteslist.filter((note) => note.id !== id));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-800">
      <Savednote
        notes={noteslist}
        onDelete={deletNote}
        onOpen={openNote}
        onAdd={handAdd}
      />

      <div className="flex-1 flex flex-col h-full ">
        <header className="p-4 border-b border-gray-200 bg-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-4 px-4">
            <img
              src={letter}
              alt="B"
              className="w-6 h-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={italic}
              alt="I"
              className="w-6 h-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={list}
              alt="List"
              className="w-6 h-6 cursor-pointer hover:opacity-70"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all text-sm font-medium">
              <img src={share} alt="share" className="w-4 h-4" />
              <span>Share</span>
            </div>

            <button
              onClick={handSave}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-medium transition-all shadow-md active:scale-95"
            >
              <img
                src={plane}
                alt="plane"
                className="w-4 h-4 invert brightness-0"
              />
              <span>Save</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 lg:p-16 max-w-5xl mx-auto w-full flex flex-col">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
            className="text-5xl font-bold text-slate-800 outline-none mb-8 placeholder:text-slate-100 w-full bg-transparent"
          />
          <textarea
            placeholder="Start writing your notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 text-slate-500 text-xl leading-relaxed outline-none resize-none placeholder:text-slate-100 w-full bg-transparent"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Notes;
