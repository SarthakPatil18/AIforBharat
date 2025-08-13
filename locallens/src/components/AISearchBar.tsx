"use client";

import { useMemo, useState } from "react";

const suggestions = [
  "Water leaking under sink",
  "AC not cooling properly",
  "Fan making noise",
  "Switchboard short circuit",
  "RO filter replacement",
  "Carpenter for door repair",
];

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return suggestions.filter((s) => s.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  return (
    <div className="card p-4 md:p-5">
      <div className="flex items-center gap-3">
        <input
          className="input text-base md:text-lg"
          placeholder="Describe your issue… e.g., ‘AC not cooling, 2BHK, Thane’"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button hidden sm:inline-flex">Search</button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {(query ? filtered : suggestions.slice(0, 4)).map((s) => (
          <button
            key={s}
            onClick={() => setQuery(s)}
            className="badge hover:border-[--ring] hover:bg-[--ring]/5"
            type="button"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}