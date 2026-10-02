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
        { id: "dispatched", label: "Dispatched" },
        { id: "inProgress", label: "In progress" },
        { id: "completed", label: "Completed" },
        { id: "canceled", label: "Canceled" },
      ],
    },
    {
      id: "priorityFilter",
      type: "singleSelect",
      label: "Priority",
      options: [
        { id: "high", label: "High" },
        { id: "normal", label: "Normal" },
        { id: "low", label: "Low" },
      ],
      // The drawer renders a Radio.Group instead of a select field.
      simpleDrawerVariant: true,
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "320px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
