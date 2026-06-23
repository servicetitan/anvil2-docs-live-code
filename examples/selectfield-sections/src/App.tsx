import { useEffect, useRef, useState } from "react";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2";

const options: SelectFieldOption[] = [
  { id: 1, label: "The Great Gatsby", group: "fiction" },
  { id: 2, label: "To Kill a Mockingbird", group: "fiction" },
  { id: 3, label: "1984", group: "fiction" },
  { id: 4, label: "Sapiens", group: "non-fiction" },
  { id: 5, label: "Thinking, Fast and Slow", group: "non-fiction" },
  { id: 6, label: "The Martian", group: "sci-fi" },
  { id: 7, label: "Dune", group: "sci-fi" },
  { id: 8, label: "Foundation", group: "sci-fi" },
];

const groupLabels: Record<string, string> = {
  fiction: "Fiction",
  "non-fiction": "Non-Fiction",
  "sci-fi": "Science Fiction",
};

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector("input");
      trigger?.focus();
      trigger?.click();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "560px" }}>
      <SelectFieldSync
        label="Books by genre"
        placeholder="Search books..."
        options={options}
        groupToString={(group) => groupLabels[group as string] ?? String(group)}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
