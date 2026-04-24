import { useEffect, useRef, useState } from "react";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2/beta";

const options: SelectFieldOption[] = [
  { id: 1, label: "The Martian by Andy Weir" },
  { id: 2, label: "Gone Girl by Gillian Flynn" },
  { id: 3, label: "Mistborn: The Final Empire by Brandon Sanderson" },
  { id: 4, label: "Murder on the Orient Express by Agatha Christie" },
  { id: 5, label: "Dune by Frank Herbert" },
  { id: 6, label: "Beloved by Toni Morrison" },
  { id: 7, label: "Atomic Habits by James Clear" },
  { id: 8, label: "Sapiens by Yuval Noah Harari" },
];

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = containerRef.current?.querySelector("input");
    trigger?.click();
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "380px" }}>
      <SelectFieldSync
        label="Favorite book"
        placeholder="Search books..."
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
