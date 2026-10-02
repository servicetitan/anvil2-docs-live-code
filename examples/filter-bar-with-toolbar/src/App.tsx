import { Flex } from "@servicetitan/anvil2";
import AttachFile from "@servicetitan/anvil2/assets/icons/material/round/attach_file.svg";
import FormatBold from "@servicetitan/anvil2/assets/icons/material/round/format_bold.svg";
import { FilterBar, Toolbar, type Filter } from "@servicetitan/anvil2/beta";
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
        { id: "active", label: "Active" },
        { id: "inactive", label: "Inactive" },
      ],
    },
    {
      id: "categoryFilter",
      type: "multiSelect",
      label: "Category",
      options: [
        { id: "plumbing", label: "Plumbing" },
        { id: "hvac", label: "HVAC" },
        { id: "electrical", label: "Electrical" },
      ],
      selectedOptions: [],
    },
  ]);

  return (
    // minWidth is demo-only so this preview stays wide enough for inline
    // filters. Omit it in your app; width: "100%" is the layout.
    <Flex alignItems="center" style={{ width: "100%", minWidth: "800px" }}>
      <FilterBar
        associatedContent="jobs table"
        filters={filters}
        flexGrow={1}
        onFilterChange={setFilters}
      />
      <Toolbar
        associatedContent="jobs table actions"
        style={{ flex: "0 0 auto", width: "fit-content" }}
      >
        <Toolbar.Button icon={AttachFile} aria-label="Attach file" />
        <Toolbar.Button icon={FormatBold} aria-label="Format bold" />
      </Toolbar>
    </Flex>
  );
}

export default App;
