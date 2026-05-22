import { Flex } from "@servicetitan/anvil2";
import { FilterBar, type Filter } from "@servicetitan/anvil2/beta";
import { useState, useEffect } from "react";

type SelectItem = { id: string; label: string };

function App() {
  const categoryOptions: SelectItem[] = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
    { id: "option5", label: "Option 5" },
  ];

  const statusOptions: SelectItem[] = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
    { id: "option5", label: "Option 5" },
  ];

  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "categoryFilter",
      type: "multiSelect",
      label: "Label",
      options: categoryOptions,
      selectedOptions: [
        { id: "option2", label: "Option 2" },
        { id: "option4", label: "Option 4" },
      ],
    },
    {
      id: "statusFilter",
      type: "multiSelect",
      label: "Label",
      options: statusOptions,
      selectedOptions: [],
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
      style={{ minWidth: "800px", height: "300px" }}
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
