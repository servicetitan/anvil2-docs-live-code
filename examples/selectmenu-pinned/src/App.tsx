import { useEffect, useRef, useState } from "react";
import {
  Button,
  SelectMenu,
  type SelectMenuOption,
} from "@servicetitan/anvil2";

const allBooks: SelectMenuOption[] = [
  { id: 1, label: "The Martian by Andy Weir" },
  { id: 2, label: "Gone Girl by Gillian Flynn" },
  { id: 3, label: "Mistborn: The Final Empire by Brandon Sanderson" },
  { id: 4, label: "Murder on the Orient Express by Agatha Christie" },
  { id: 5, label: "Dune by Frank Herbert" },
  { id: 6, label: "Beloved by Toni Morrison" },
  { id: 7, label: "Atomic Habits by James Clear" },
  { id: 8, label: "Sapiens by Yuval Noah Harari" },
  { id: 9, label: "The Name of the Wind by Patrick Rothfuss" },
  { id: 10, label: "Project Hail Mary by Andy Weir" },
];

function App() {
  const [value, setValue] = useState<SelectMenuOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trigger = containerRef.current?.querySelector("button");
      trigger?.click();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "480px" }}>
      <SelectMenu
        label="Favorite book"
        pinned={{
          label: "Recently viewed",
          options: [
            { id: 5, label: "Dune by Frank Herbert" },
            { id: 1, label: "The Martian by Andy Weir" },
            { id: 10, label: "Project Hail Mary by Andy Weir" },
          ],
        }}
        loadOptions={(searchValue) => {
          const lower = searchValue.toLowerCase();
          return allBooks.filter((b) => b.label.toLowerCase().includes(lower));
        }}
        value={value}
        onSelectedOptionChange={setValue}
        trigger={(props) => (
          <Button {...props}>{value ? value.label : "Select a book"}</Button>
        )}
      />
    </div>
  );
}

export default App;
