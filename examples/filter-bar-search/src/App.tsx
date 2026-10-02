import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "statusFilter",
      type: "singleSelect",
      label: "Status",
      options: [
        { id: "scheduled", label: "Scheduled" },
        { id: "completed", label: "Completed" },
      ],
    },
    // Placed last in the array; FilterBar still renders it first.
    // A non-empty value counts as an active filter, so Clear Filters appears.
    {
      id: "searchFilter",
      type: "search",
      label: "Search",
      placeholder: "Search jobs...",
      value: "Water heater",
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
