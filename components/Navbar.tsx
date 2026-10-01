import { SearchIcon } from "lucide-react";
import React from "react";

interface SetFilters {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
function Navbar({setSearchQuery }: SetFilters) {
  
  return (
    <div className="sticky top-0 border-b border-white/10 bg-[#0b0d12]/95 h-16 w-full flex items-center justify-between gap-4 px-4 md:px-6">
      <div className="cursor-pointer shrink-0">
        <h1 className="text-indigo-400 text-lg md:text-2xl font-extrabold font-mono tracking-tight">
          RESOURCES HUB
        </h1>
      </div>
      <div className="flex gap-2 justify-center items-center max-w-md w-full">
        <SearchIcon className="text-indigo-400 size-4 shrink-0"></SearchIcon>
        <input
          type="text"
          onChange={(e)=>setSearchQuery(e.target.value)}
          className="h-9 w-full bg-transparent px-3 text-sm text-zinc-200 border border-white/15 rounded-md outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40"
        ></input>
      </div>
    </div>
  );
}

export default Navbar;
