import {
  DataTable,
  createColumnHelper,
  type DataTableBulkSelection,
  type TableRow,
} from "@servicetitan/anvil2/beta";

import { useState } from "react";

type AutomationData = {
  id: string;
  block: string;
  owner: string;
  showAutomation: boolean;
};

const initialData: TableRow<AutomationData>[] = [
  { id: "1", block: "Filters", owner: "Pricebook", showAutomation: false },
  { id: "2", block: "Home Screens", owner: "Projects", showAutomation: true },
  { id: "3", block: "Data List", owner: "Pricebook", showAutomation: true },
  { id: "4", block: "Column Editor", owner: "Schedule", showAutomation: false },
  { id: "5", block: "Feeds", owner: "Workspace", showAutomation: true },
];

const createColumn = createColumnHelper<AutomationData>();

const columns = [
  createColumn("block", { header: { label: "Block" }, minWidth: 160 }),
  createColumn("owner", { header: { label: "Owner" }, minWidth: 140 }),
  createColumn("showAutomation", {
    header: { label: "Show Automation" },
    renderCell: (value: boolean) => (value ? "True" : "False"),
  }),
];

// Singular or plural wording, following the selected count
const automationsLabel = (verb: string) => (count: number) =>
  `${verb} ${count === 1 ? "Automation" : "Automations"}`;

function App() {
  const [data, setData] = useState(initialData);

  const setVisibility =
    (showAutomation: boolean) =>
    (selection: DataTableBulkSelection<AutomationData>) => {
      setData((rows) =>
        rows.map((row) =>
          selection.mode === "all" || selection.rowIds.includes(row.id)
            ? { ...row, showAutomation }
            : row,
        ),
      );
    };

  return (
    <DataTable
      data={data}
      columns={columns}
      isSelectable
      defaultSelectedRowIds={["2", "3"]}
      bulkActions={{
        primary: {
          label: automationsLabel("Show"),
          onClick: setVisibility(true),
        },
        secondary: {
          label: automationsLabel("Hide"),
          onClick: setVisibility(false),
        },
      }}
    />
  );
}

export default App;
