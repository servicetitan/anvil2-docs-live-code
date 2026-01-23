import { Toolbar, type Filter } from "@servicetitan/anvil2/beta";
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
      items: categoryOptions,
      selectedItems: [
        { id: "option2", label: "Option 2" },
        { id: "option4", label: "Option 4" },
      ],
    },
    {
      id: "statusFilter",
      type: "multiSelect",
      label: "Label",
      items: statusOptions,
      selectedItems: [],
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
    <div style={{ width: "800px" }}>
      <Toolbar associatedContent="name">
        <Toolbar.Filters filters={filters} onFilterChange={setFilters} />
      </Toolbar>
    </div>
  );
}

export default App;
