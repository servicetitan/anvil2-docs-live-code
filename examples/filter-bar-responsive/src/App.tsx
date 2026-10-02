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

  // Below 640px FilterBar normally collapses to the drawer trigger alone.
  // `disableCollapse` keeps the filters inline and lets them wrap instead.
  return (
    <div style={{ width: "320px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
        disableCollapse
      />
    </div>
  );
}

export default App;
