import { useEffect, useRef, useState } from "react";
import {
  MultiSelectField,
  type MultiSelectFieldOption,
} from "@servicetitan/anvil2";
import GroupIcon from "@servicetitan/anvil2/assets/icons/material/round/groups.svg";

const options: MultiSelectFieldOption[] = [
  { id: "dispatch", label: "Dispatch", content: { icon: { svg: GroupIcon } } },
  {
    id: "install-crew",
    label: "Install crew",
    content: { icon: { svg: GroupIcon } },
  },
  {
    id: "service-team",
    label: "Service team",
    content: { icon: { svg: GroupIcon } },
  },
  {
    id: "maintenance-team",
    label: "Maintenance team",
    content: { icon: { svg: GroupIcon } },
  },
  {
    id: "sales-team",
    label: "Sales team",
    content: { icon: { svg: GroupIcon } },
  },
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
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "340px" }}>
      <MultiSelectField
        label="Notify teams"
        placeholder="Search teams..."
        loadOptions={() => options}
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
