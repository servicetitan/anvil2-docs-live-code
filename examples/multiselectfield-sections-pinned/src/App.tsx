import { useEffect, useRef, useState } from "react";
import { MultiSelectField, MultiSelectFieldOption } from "@servicetitan/anvil2";

const allBooks: MultiSelectFieldOption[] = [
  { id: 1, label: "The Martian" },
  { id: 2, label: "Gone Girl" },
  { id: 3, label: "Mistborn: The Final Empire" },
  { id: 4, label: "Murder on the Orient Express" },
  { id: 5, label: "Dune" },
  { id: 6, label: "Beloved" },
  { id: 7, label: "Atomic Habits" },
  { id: 8, label: "Sapiens" },
  { id: 9, label: "The Name of the Wind" },
  { id: 10, label: "Project Hail Mary" },
];

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);
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
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "480px" }}>
      <MultiSelectField
        label="Favorite books"
        placeholder="Search books..."
        pinned={{
          label: "Recently viewed",
          options: [
            { id: 5, label: "Dune" },
            { id: 1, label: "The Martian" },
            { id: 10, label: "Project Hail Mary" },
          ],
        }}
        loadOptions={(searchValue) => {
          const lower = searchValue.toLowerCase();
          return allBooks.filter((b) => b.label.toLowerCase().includes(lower));
        }}
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
