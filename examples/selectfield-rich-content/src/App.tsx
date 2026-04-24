import { useEffect, useRef, useState } from "react";
import { SelectField, SelectFieldOption } from "@servicetitan/anvil2/beta";

const options: SelectFieldOption[] = [
  {
    id: 1,
    label: "Label only",
  },
  {
    id: 2,
    label: "Title + description",
    content: {
      title: "Title + description",
      description: "A short description providing extra context",
    },
  },
  {
    id: 3,
    label: "Title + chips",
    content: {
      title: "Title + chips",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
    },
  },
  {
    id: 4,
    label: "Title + description + avatar",
    content: {
      title: "Title + description + avatar",
      description: "Option with an avatar",
      avatar: { name: "Jane Doe", color: "#6366F1" },
    },
  },
  {
    id: 5,
    label: "Title + description + chips",
    content: {
      title: "Title + description + chips",
      description: "Option with chip tags",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
    },
  },
];

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
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "420px" }}>
      <SelectField
        label="Rich content options"
        placeholder="Search options..."
        loadOptions={() => options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
