import { Flex } from "@servicetitan/anvil2";
import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "categoryFilter",
      type: "dateRange",
      label: "Label",
      mode: "mm/dd/yyyy",
      value: {
        startDate: "2026-01-01",
        endDate: "2026-01-14",
      },
    },
    {
      id: "statusFilter",
      type: "dateRange",
      label: "Label",
      mode: "mm/dd/yyyy",
    },
  ]);

  useEffect(() => {
    // Small delay to ensure the button is rendered
    const timer = setTimeout(() => {
      const button = document.querySelector(
        `button[data-id="categoryFilter"]`,
      ) as HTMLButtonElement;
      if (button) {
        button.click();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      style={{ minWidth: "800px", height: "500px" }}
      alignItems="flex-start"
    >
      <FilterBar
        associatedContent="example"
        filters={filters}
        onFilterChange={setFilters}
        flexGrow={1}
      />
    </Flex>
  );
}

export default App;
