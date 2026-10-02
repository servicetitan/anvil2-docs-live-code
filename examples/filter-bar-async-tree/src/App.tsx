import {
  FilterBar,
  type Filter,
  type TreeSelectMenuNode,
} from "@servicetitan/anvil2/beta";
import { useState } from "react";

// Flat "server" data: each node knows its parent.
const orgChart = [
  { id: "field", label: "Field operations", parentId: null },
  { id: "plumbing", label: "Plumbing", parentId: "field" },
  { id: "hvac", label: "HVAC", parentId: "field" },
  { id: "alice", label: "Alice Chen", parentId: "plumbing" },
  { id: "bob", label: "Bob Kumar", parentId: "plumbing" },
  { id: "carol", label: "Carol Park", parentId: "hvac" },
  { id: "office", label: "Office", parentId: null },
  { id: "dan", label: "Dan Reeves", parentId: "office" },
];

function toNode(record: (typeof orgChart)[number]): TreeSelectMenuNode {
  const childCount = orgChart.filter((r) => r.parentId === record.id).length;
  // `children: null` marks a branch whose children load on expand.
  return childCount > 0
    ? { id: record.id, label: record.label, children: null, childCount }
    : { id: record.id, label: record.label };
}

// Stands in for a server request. Called with no `parentNode` for the roots
// (or a search), and with `parentNode` when a branch expands.
async function fetchOrgChart(
  searchValue: string,
  parentNode?: TreeSelectMenuNode,
): Promise<TreeSelectMenuNode[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (parentNode) {
    return orgChart.filter((r) => r.parentId === parentNode.id).map(toNode);
  }

  if (searchValue) {
    const query = searchValue.toLowerCase();
    return orgChart
      .filter((r) => r.label.toLowerCase().includes(query))
      .map((r) => ({ id: r.id, label: r.label }));
  }

  return orgChart.filter((r) => r.parentId === null).map(toNode);
}

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "orgChartFilter",
      type: "asyncTree",
      label: "Org chart",
      loadOptions: fetchOrgChart,
      selectionMode: "linked",
      valueConsistsOf: "LEAF_PRIORITY",
      initialLoad: "open",
    },
  ]);

  // Demo-only wrapper: keeps the preview wide enough to show inline filters.
  return (
    <div style={{ minWidth: "800px", height: "400px" }}>
      <FilterBar
        associatedContent="technicians table"
        filters={filters}
        onFilterChange={setFilters}
      />
    </div>
  );
}

export default App;
