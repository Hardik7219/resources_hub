"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import ResourcesGrid from "./ResourcesGrid";
import FilterSec from "./FilterSec";
import { Filters } from "@/types/types";
import { Menu } from "lucide-react";

function ResourcesHub() {
  const [filters, setFilters] = useState<Filters[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-screen overflow-hidden w-full bg-[#0b0d12]">
      <div className="flex-none z-10">
        <Navbar  setSearchQuery={setSearchQuery}></Navbar>
      </div>
      <main className="flex-1 overflow-hidden flex flex-col md:flex-row w-full min-w-0">
        <div className="flex border-b md:border-b-0 md:border-r border-white/10 flex-col md:flex-row w-full md:w-56 shrink-0 md:h-full">
          <div className="flex-col md:h-full">
            <button
              className="border border-white/15 rounded-md p-2 m-2 md:hidden text-zinc-300"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <Menu></Menu>
            </button>
          </div>
          <div
            className={`${showFilter ? "block" : "hidden"} no-scrollbar md:block flex-1 overflow-y-auto min-w-0`}
          >
            <FilterSec filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="flex-1 no-scrollbar overflow-y-auto p-4 md:p-6 w-full min-w-0 h-full">
          {" "}
          <ResourcesGrid filters={filters} searchQuery={searchQuery}></ResourcesGrid>
        </div>
      </main>
    </div>
  );
}

export default ResourcesHub;
