import {
  Toolbar,
  type Filter,
  type CustomFilter,
} from "@servicetitan/anvil2/beta";
import { Radio, Combobox, Flex } from "@servicetitan/anvil2";
import { useState, useEffect } from "react";

type ComboboxItem = {
  id: string;
  label: string;
};

const comboboxItems: ComboboxItem[] = [
  { id: "is", label: "Is" },
  { id: "isNot", label: "Is Not" },
];

type CustomFilterValue = {
  id: number;
  label: string;
};

const filterOptions = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

type SelectItem = { id: string; label: string };

const categoryOptions: SelectItem[] = [
  { id: "option1", label: "Option 1" },
  { id: "option2", label: "Option 2" },
  { id: "option3", label: "Option 3" },
];

const multiSelectCategoryOptions: SelectItem[] = [
  { id: "option1", label: "Option 1" },
  { id: "option2", label: "Option 2" },
  { id: "option3", label: "Option 3" },
  { id: "option4", label: "Option 4" },
  { id: "option5", label: "Option 5" },
];

function OperatorCombobox() {
  const [selectedItem, setSelectedItem] = useState<ComboboxItem | null>(
    comboboxItems[0],
  );

  return (
    <Combobox.Select
      disableClearSelection
      items={comboboxItems}
      itemToString={(item) => (item ? item.label : "")}
      itemToKey={(item) => (item ? item.id : null)}
      selectedItem={selectedItem}
      onChange={setSelectedItem}
    >
      <Combobox.SelectTrigger label="Custom Filter" />
      <Combobox.Content>
        {({ items }) => (
          <Combobox.List>
            {items.map((item, i) => (
              <Combobox.Item key={item.id} item={item} index={i}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        )}
      </Combobox.Content>
    </Combobox.Select>
  );
}

function App() {
  const customFilter: CustomFilter<CustomFilterValue> = {
    id: "customFilterId",
    type: "custom",
    label: "Custom filter",
    buttonRender: ({ value, onChange }) => (
      <Flex direction="column" gap={3} style={{ padding: "0.5rem" }}>
        <OperatorCombobox />
        <Radio.Group legend="Custom filter button">
          {filterOptions.map((option) => (
            <Radio
              key={option.id}
              name="custom-filter-radio-popover"
              value={option.id.toString()}
              label={option.label}
              checked={value?.id === option.id}
              onChange={(e) => {
                if (!e?.target) return;
                const selected = filterOptions.find(
                  (opt) => opt.id.toString() === e.target.value,
                );
                onChange(selected);
              }}
            />
          ))}
        </Radio.Group>
      </Flex>
    ),
    drawerRender: ({ value, onChange }) => (
      <Flex direction="column" gap={2}>
        <OperatorCombobox />
        <Radio.Group legend="Custom filter drawer">
          {filterOptions.map((option) => (
            <Radio
              key={option.id}
              name="custom-filter-radio-drawer"
              value={option.id.toString()}
              label={option.label}
              checked={value?.id === option.id}
              onChange={(e) => {
                if (!e?.target) return;
                const selected = filterOptions.find(
                  (opt) => opt.id.toString() === e.target.value,
                );
                onChange(selected);
              }}
            />
          ))}
        </Radio.Group>
      </Flex>
    ),
  };

  const [filters, setFilters] = useState<Filter[]>([
    // Boolean filter
    {
      type: "boolean",
      id: "booleanFilterId",
      label: "Boolean",
      checked: true,
    },
    // Single select filter
    {
      id: "categoryFilter",
      type: "singleSelect",
      label: "Single select",
      items: categoryOptions,
      selectedItem: { id: "option2", label: "Option 2" },
    },
    // Multi select filter
    {
      id: "categoryMultiSelectFilter",
      type: "multiSelect",
      label: "Multi select",
      items: multiSelectCategoryOptions,
      selectedItems: [
        { id: "option2", label: "Option 2" },
        { id: "option4", label: "Option 4" },
      ],
    },
    // Date filter
    {
      id: "dateFilter",
      type: "date",
      label: "Single date",
      mode: "mm/dd/yyyy",
      value: "2026-01-01",
    },
    // Date range filter
    {
      id: "dateRangeFilter",
      type: "dateRange",
      label: "Multi date",
      mode: "mm/dd/yyyy",
      value: {
        startDate: "2026-01-01",
        endDate: "2026-01-14",
      },
    },
    // Custom filter
    {
      ...customFilter,
      value: { id: 2, label: "Option 2" },
    },
  ]);

  // Update label based on current filter value for custom filter
  useEffect(() => {
    const currentFilter = filters.find((f) => f.id === "customFilterId") as
      | CustomFilter<CustomFilterValue>
      | undefined;
    if (currentFilter) {
      const currentValue = currentFilter.value;
      const newLabel = currentValue
        ? `Custom filter: ${currentValue.label}`
        : "Custom filter";
      if (currentFilter.label !== newLabel) {
        setFilters((prev) =>
          prev.map((f) =>
            f.id === "customFilterId" ? { ...f, label: newLabel } : f,
          ),
        );
      }
    }
  }, [filters]);

  useEffect(() => {
    // Small delay to ensure the button is rendered
    const timer = setTimeout(() => {
      const button = document.querySelector(
        `button[data-anv="filter-group-drawer-trigger"]`,
      ) as HTMLButtonElement;
      if (button) {
        button.click();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex style={{ width: "800px", height: "775px" }}>
      <Toolbar associatedContent="name">
        <Toolbar.Filters filters={filters} onFilterChange={setFilters} />
      </Toolbar>
    </Flex>
  );
}

export default App;
