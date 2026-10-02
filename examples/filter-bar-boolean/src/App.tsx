import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "unassignedFilter",
      type: "boolean",
      label: "Unassigned",
      checked: true,
    },
    {
      id: "overdueFilter",
      type: "boolean",
      label: "Overdue",
      checked: false,
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
