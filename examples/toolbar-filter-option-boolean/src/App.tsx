import { Toolbar } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState([
    {
      type: "boolean",
      id: "booleanFilterId",
      label: "Boolean Filter",
      checked: false,
    },
    {
      type: "boolean",
      id: "booleanFilterId2",
      label: "Boolean Filter 2",
      checked: true,
    },
  ]);

  return (
    <Toolbar associatedContent="name">
      {filters.map((filter) => (
        <Toolbar.ButtonToggle
          key={filter.id}
          checked={filter.checked}
          onClick={() => {
            setFilters((prev) =>
              prev.map((f) =>
                f.id === filter.id ? { ...f, checked: !f.checked } : f,
              ),
            );
            console.log("Filter toggled:", filter.id);
          }}
        >
          {filter.label}
        </Toolbar.ButtonToggle>
      ))}
    </Toolbar>
  );
}

export default App;
