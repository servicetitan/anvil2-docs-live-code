import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "scheduledDateFilter",
      type: "date",
      label: "Scheduled date",
      mode: "mm/dd/yyyy",
      value: "2025-08-15",
    },
    {
      id: "completedDateFilter",
      type: "date",
      label: "Completed date",
      mode: "mm/dd/yyyy",
      // Dates outside this window are disabled in the calendar.
      minDate: "2025-08-01",
      maxDate: "2025-12-31",
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "480px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
