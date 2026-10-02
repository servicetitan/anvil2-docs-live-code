import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "dueDateFilter",
      type: "date",
      label: "Due date",
      mode: "mm/dd/yyyy",
      minDate: "2025-08-15",
      unavailable: {
        // Specific dates (ISO 8601) and/or days of the week (1 = Monday … 7 = Sunday).
        dates: ["2025-08-25"],
        daysOfWeek: [6, 7],
      },
      getErrorMessage: ({ reason }) =>
        reason === "minDate"
          ? "Choose a date on or after August 15, 2025."
          : "This date can't be selected.",
    },
    {
      id: "serviceWindowFilter",
      type: "dateRange",
      label: "Service window",
      mode: "mm/dd/yyyy",
      minDate: "2025-08-15",
      maxDate: "2025-12-31",
      getErrorMessage: (context) => {
        if (context.reason === "startAfterEnd") {
          return "The start date must be before the end date.";
        }
        return context.field === "start"
          ? "Choose a start date within the service window."
          : "Choose an end date within the service window.";
      },
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
