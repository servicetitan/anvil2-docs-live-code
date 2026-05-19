import { Flex } from "@servicetitan/anvil2";
import {
  FilterBar,
  type Filter,
  type DateListOption,
} from "@servicetitan/anvil2/beta";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";

function App() {
  const today = DateTime.local().startOf("day");
  const dateListOptions: DateListOption[] = [
    { id: "today", label: "Today", value: today.toISODate() },
    {
      id: "yesterday",
      label: "Yesterday",
      value: today.minus({ days: 1 }).toISODate(),
    },
    {
      id: "last7Days",
      label: "Last 7 days",
      value: {
        startDate: today.minus({ days: 6 }).toISODate() ?? "",
        endDate: today.toISODate() ?? "",
      },
    },
  ];

  const [filters, setFilters] = useState<Filter[]>([
    {
      id: "dueDateFilter",
      type: "dateList",
      label: "Due date",
      mode: "mm/dd/yyyy",
      options: dateListOptions,
    },
  ]);

  useEffect(() => {
    // Small delay to ensure the button is rendered
    const timer = setTimeout(() => {
      const button = document.querySelector(
        `button[data-id="dueDateFilter"]`,
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
