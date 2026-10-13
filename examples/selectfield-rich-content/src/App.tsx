import { useEffect, useRef, useState } from "react";
import { SelectField, type SelectFieldOption } from "@servicetitan/anvil2";
import GroupIcon from "@servicetitan/anvil2/assets/icons/material/round/groups.svg";

const options: SelectFieldOption[] = [
  {
    id: 1,
    label: "Label only",
  },
  {
    id: 2,
    label: "Label + icon",
    content: {
      icon: { svg: GroupIcon },
    },
  },
  {
    id: 3,
    label: "Title + description",
    content: {
      title: "Title + description",
      description: "A short description providing extra context",
    },
  },
  {
    id: 4,
    label: "Title + description + icon",
    content: {
      title: "Title + description + icon",
      description: "A short description providing extra context",
      icon: { svg: GroupIcon },
    },
  },
  {
    id: 5,
    label: "Title + chips",
    content: {
      title: "Title + chips",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
    },
  },
  {
    id: 6,
    label: "Title + chips + icon",
    content: {
      title: "Title + chips + icon",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
      icon: { svg: GroupIcon },
    },
  },
  {
    id: 7,
    label: "Title + description + avatar",
    content: {
      title: "Title + description + avatar",
      description: "Option with an avatar",
      avatar: { name: "Jane Doe", color: "#6366F1" },
    },
  },
  {
    id: 8,
    label: "Title + description + avatar + icon",
    content: {
      title: "Title + description + avatar + icon",
      description: "Option with an avatar",
      avatar: { name: "Jane Doe", color: "#6366F1" },
      icon: { svg: GroupIcon },
    },
  },
  {
    id: 9,
    label: "Title + description + chips",
    content: {
      title: "Title + description + chips",
      description: "Option with chip tags",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
    },
  },
  {
    id: 10,
    label: "Title + description + chips + icon",
    content: {
      title: "Title + description + chips + icon",
      description: "Option with chip tags",
      chips: [{ label: "Tag A" }, { label: "Tag B", color: "#F97316" }],
      icon: { svg: GroupIcon },
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
