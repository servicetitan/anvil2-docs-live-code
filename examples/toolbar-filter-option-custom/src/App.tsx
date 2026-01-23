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
    label: "Custom Filter",
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

  const [filters, setFilters] = useState<Filter[]>([customFilter]);

  // Update label based on current filter value
  useEffect(() => {
    const currentFilter = filters.find((f) => f.id === "customFilterId") as
      | CustomFilter<CustomFilterValue>
      | undefined;
    if (currentFilter) {
      const currentValue = currentFilter.value;
      const newLabel = currentValue
        ? `Custom Filter: ${currentValue.label}`
        : "Custom Filter";
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
        `button[data-id="customFilterId"]`,
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
          onFilterChange={(updatedFilters) => {
            setFilters(updatedFilters);
          }}
        />
      </Toolbar>
    </div>
  );
}

export default App;
