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
        { id: "waterTreatment", label: "Water treatment" },
      ],
      selectedOptions: [{ id: "plumbing", label: "Plumbing" }],
      selectAll: true,
      selectFiltered: true,
    },
    {
      id: "tagFilter",
      type: "multiSelect",
      label: "Tags",
      options: [
        { id: "membership", label: "Membership" },
        { id: "warranty", label: "Warranty" },
        { id: "callback", label: "Callback" },
      ],
      selectedOptions: [],
      // The drawer renders a Checkbox.Group instead of a select field.
      simpleDrawerVariant: true,
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
