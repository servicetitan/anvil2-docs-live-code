import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState } from "react";

// ISO 8601 date string (local calendar day) for `daysAgo` days before today.
// Avoid `toISOString()`: it reports the UTC day, which can be off by one.
function isoDate(daysAgo = 0) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "dueDateFilter",
      type: "dateList",
      label: "Due date",
      mode: "mm/dd/yyyy",
      // On…, Before…, After…, and Custom Range… are appended automatically.
      options: [
        { id: "any", label: "Any time", value: null },
        { id: "today", label: "Today", value: isoDate() },
        { id: "yesterday", label: "Yesterday", value: isoDate(1) },
        {
          id: "last7Days",
          label: "Last 7 days",
          value: { startDate: isoDate(6), endDate: isoDate() },
        },
        {
          id: "last30Days",
          label: "Last 30 days",
          value: { startDate: isoDate(29), endDate: isoDate() },
        },
      ],
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "440px" }}>
      <FilterBar
        associatedContent="invoices table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
