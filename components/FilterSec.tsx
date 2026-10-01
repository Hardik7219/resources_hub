"use client";
import React from "react";
import { Filters } from "@/types/types";
import { filter } from "@/utils/data/filters";
interface SetFilters {
  setFilters: React.Dispatch<React.SetStateAction<Filters[]>>;
  filters: Filters[];
}

function FilterSec({ filters, setFilters }: SetFilters) {
  const addFilter = (i: Filters) => {
    setFilters((prev) => {
      if (prev.includes(i)) {
        return prev.filter((f) => f !== i);
      }
      return [...prev, i];
    });
  };

  return (
    <div className="bg-transparent md:h-full w-full flex flex-wrap md:flex-col gap-2 p-3">
      
      {filter.map((i) => {
        const isActive: boolean = filters.includes(i as unknown as Filters);
        return (
          <div key={i}>
            <button
              onClick={() => addFilter(i as unknown as Filters)}
              className={`rounded-full text-sm px-3 py-1 cursor-pointer border transition-colors ${isActive ? "bg-indigo-600 text-white border-indigo-600" : "border-white/10 text-zinc-300 bg-white/5 hover:border-indigo-500/40 hover:text-white"}`}
            >
              {i}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FilterSec;
