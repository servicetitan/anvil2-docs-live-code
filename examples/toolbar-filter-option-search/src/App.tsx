import { Flex } from "@servicetitan/anvil2";
import { Toolbar, type Filter } from "@servicetitan/anvil2/beta";
import { useState, useEffect } from "react";

type SelectItem = { id: string; label: string };

function App() {
  const allCategoryOptions: SelectItem[] = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
    { id: "option5", label: "Option 5" },
  ];

  const [categoryOptions, setCategoryOptions] =
    useState<SelectItem[]>(allCategoryOptions);

  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "categoryFilter",
      type: "singleSelect",
      label: "Label",
      items: categoryOptions,
      hasSearch: true,
      onSearch: (searchTerm: string) => {
        if (!searchTerm) {
          setCategoryOptions(allCategoryOptions);
        } else {
          const filtered = allCategoryOptions.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setCategoryOptions(filtered);
        }
      },
      onSearchClear: () => {
        setCategoryOptions(allCategoryOptions);
      },
    },
  ]);

  // Update filters when categoryOptions change
  useEffect(() => {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.id === "categoryFilter"
          ? { ...filter, items: categoryOptions }
          : filter,
      ),
    );
  }, [categoryOptions]);

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
    <Flex style={{ width: "800px", height: "320px" }} alignItems="flex-start">
      <Toolbar associatedContent="name">
        <Toolbar.Filters filters={filters} onFilterChange={setFilters} />
      </Toolbar>
    </Flex>
  );
}

export default App;
