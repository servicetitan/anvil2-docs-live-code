import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "businessUnitFilter",
      type: "multiSelect",
      label: "Business unit",
      options: [
        { id: "plumbing", label: "Plumbing" },
        { id: "hvac", label: "HVAC" },
        { id: "electrical", label: "Electrical" },
      ],
      selectedOptions: [],
    },
    {
      id: "statusFilter",
      type: "singleSelect",
      label: "Status",
      options: [
        { id: "scheduled", label: "Scheduled" },
        { id: "completed", label: "Completed" },
      ],
    },
    {
      id: "scheduledDateFilter",
      type: "dateRange",
      label: "Scheduled date",
      mode: "mm/dd/yyyy",
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "360px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
        // Popovers show Apply and Cancel instead of committing on each change.
        controlledFiltering
      />
    </div>
  );
}

export default App;
