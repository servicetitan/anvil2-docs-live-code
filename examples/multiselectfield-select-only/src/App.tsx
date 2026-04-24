import { useEffect, useRef, useState } from "react";
import {
  MultiSelectFieldSync,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2/beta";

const options: MultiSelectFieldOption[] = [
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
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector('[role="combobox"]');
      if (trigger instanceof HTMLElement) trigger.click();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "380px" }}>
      <MultiSelectFieldSync
        disableSearch
        label="Favorite books"
        placeholder="Select books..."
        options={options}
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
