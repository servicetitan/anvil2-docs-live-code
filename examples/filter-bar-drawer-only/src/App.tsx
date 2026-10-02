import { TextField } from "@servicetitan/anvil2";
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
    // Never rendered inline — only reachable from the drawer.
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
      drawerOnly: true,
    },
    // Drawer-only custom filters take `drawerRender` only; `buttonRender`
    // is not allowed.
    {
      id: "poNumberFilter",
      type: "custom",
      label: "PO number",
      drawerOnly: true,
      drawerRender: ({ value, onChange }) => (
        <TextField
          label="PO number"
          value={(value as string | undefined) ?? ""}
          onChange={(e) => onChange(e.target.value || undefined)}
        />
      ),
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
