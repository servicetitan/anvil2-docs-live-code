import { Toolbar, type Filter } from "@servicetitan/anvil2/beta";
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
      items: categoryOptions,
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
        <Toolbar.Filters
          filters={filters}
          onFilterChange={setFilters}
          controlledFiltering={true}
        />
      </Toolbar>
    </div>
  );
}

export default App;
