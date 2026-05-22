import { Flex } from "@servicetitan/anvil2";
import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState, useEffect } from "react";

type SelectItem = { id: string; label: string };

function App() {
  const categoryOptions: SelectItem[] = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
  ];

  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "categoryFilter",
      type: "singleSelect",
      label: "Label",
      options: categoryOptions,
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
      style={{ minWidth: "800px", height: "245px" }}
      alignItems="flex-start"
    >
      <FilterBar
        associatedContent="example"
        filters={filters}
        onFilterChange={setFilters}
        controlledFiltering={true}
        flexGrow={1}
      />
    </Flex>
  );
}

export default App;
