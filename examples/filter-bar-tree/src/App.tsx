import {
  FilterBar,
  type Filter,
  type TreeSelectMenuNode,
} from "@servicetitan/anvil2/beta";
import { useState } from "react";

const departments: TreeSelectMenuNode[] = [
  {
    id: "field",
    label: "Field operations",
    children: [
      {
        id: "plumbing",
        label: "Plumbing",
        children: [
          { id: "plumbing-install", label: "Install" },
          { id: "plumbing-service", label: "Service" },
        ],
      },
      {
        id: "hvac",
        label: "HVAC",
        children: [
          { id: "hvac-install", label: "Install" },
          { id: "hvac-maintenance", label: "Maintenance" },
        ],
      },
    ],
  },
  {
    id: "office",
    label: "Office",
    children: [
      { id: "dispatch", label: "Dispatch" },
      { id: "csr", label: "Customer service" },
    ],
  },
];

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "departmentFilter",
      type: "tree",
      label: "Department",
      options: departments,
      selectionMode: "linked", // "single" | "independent" | "linked"
      valueConsistsOf: "LEAF_PRIORITY",
      defaultExpandLevel: 1,
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "440px" }}>
      <FilterBar
        associatedContent="technicians table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
