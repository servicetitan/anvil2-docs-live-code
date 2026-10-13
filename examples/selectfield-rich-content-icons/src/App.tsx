import { useEffect, useRef, useState } from "react";
import { SelectField, type SelectFieldOption } from "@servicetitan/anvil2";
import GroupIcon from "@servicetitan/anvil2/assets/icons/material/round/groups.svg";

const options: SelectFieldOption[] = [
  {
    id: "install-crew",
    label: "Install crew",
    content: {
      description: "6 technicians",
      icon: { svg: GroupIcon },
    },
  },
  {
    id: "service-team",
    label: "Service team",
    content: {
      description: "12 technicians",
      icon: { svg: GroupIcon },
    },
  },
  {
    id: "maintenance-team",
    label: "Maintenance team",
    content: {
      description: "8 technicians",
      icon: { svg: GroupIcon },
    },
  },
  {
    id: "commercial-team",
    label: "Commercial team",
    content: {
      description: "5 technicians",
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
    <div ref={containerRef} style={{ minWidth: "384px", minHeight: "340px" }}>
      <SelectField
        label="Assigned team"
        placeholder="Search teams..."
        loadOptions={() => options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
