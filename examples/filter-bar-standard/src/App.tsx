import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "activeFilter",
      type: "boolean",
      label: "Active only",
      checked: false,
    },
    {
      id: "statusFilter",
      type: "singleSelect",
      label: "Status",
      options: [
        { id: "scheduled", label: "Scheduled" },
        { id: "inProgress", label: "In progress" },
        { id: "completed", label: "Completed" },
      ],
    },
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
      id: "scheduledDateFilter",
      type: "date",
      label: "Scheduled date",
      mode: "mm/dd/yyyy",
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
