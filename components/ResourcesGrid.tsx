import React from "react";
import Link from "./share/Link";
import { Filters } from "@/types/types";
import { resources } from "@/utils/data/data";
import { motion } from "motion/react";
interface GridFilter {
  filters: Filters[];
  searchQuery: string;
}
function ResourcesGrid({ filters, searchQuery }: GridFilter) {
  const filterResources = resources.filter((r) => {
    const matchFilters =
      filters.length === 0 ||
      filters.every((ca) => r.categories.includes(ca as unknown as string));
    const matchSearch =
      searchQuery === "" ||
      r.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchFilters && matchSearch;
  });
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-2 border-dashed border-hub-border px-6 py-16"
      >
        <h1 className="text-2xl font-extrabold font-mono text-indigo-600">
          {filterResources.length} Total{" "}
        </h1>
        <div className="gap-2 flex flex-col md:grid grid-cols-2 m-8">
            {filterResources.map((i) => (
              <div key={i.id}>
                <Link
                  title={i.title}
                  des={i.description}
                  cato={i.categories}
                  link={i.link}
                ></Link>
              </div>
            ))}
          <h1 className="text-2xl text-center font-extrabold font-mono text-indigo-600">
            {filterResources.length == 0 && <p>no match </p>}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

export default ResourcesGrid;
