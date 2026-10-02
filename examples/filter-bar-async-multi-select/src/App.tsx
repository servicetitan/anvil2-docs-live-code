import type { MultiSelectMenuOption } from "@servicetitan/anvil2";
import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

const technicians: MultiSelectMenuOption[] = [
  { id: "1", label: "Alice Chen" },
  { id: "2", label: "Bob Kumar" },
  { id: "3", label: "Carol Park" },
  { id: "4", label: "Dan Reeves" },
  { id: "5", label: "Eve Martinez" },
];

// Stands in for a server request.
async function fetchTechnicians(searchValue: string) {
  await new Promise((resolve) => setTimeout(resolve, 400));
  const query = searchValue.toLowerCase();
  return technicians.filter((tech) => tech.label.toLowerCase().includes(query));
}

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "assignedTechniciansFilter",
      type: "asyncMultiSelect",
      label: "Assigned technicians",
      selectedOptions: [],
      loadOptions: fetchTechnicians,
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "360px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
