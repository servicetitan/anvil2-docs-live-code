import { Flex } from "@servicetitan/anvil2";
import { Toolbar, type Filter } from "@servicetitan/anvil2/beta";
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "categoryFilter",
      type: "date",
      label: "Label",
      mode: "mm/dd/yyyy",
      value: "2026-01-01",
    },
    {
      id: "statusFilter",
      type: "date",
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
    <Flex style={{ width: "800px", height: "500px" }} alignItems="flex-start">
      <Toolbar associatedContent="name">
        <Toolbar.Filters filters={filters} onFilterChange={setFilters} />
      </Toolbar>
    </Flex>
  );
}

export default App;
