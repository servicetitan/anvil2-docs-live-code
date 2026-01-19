import { Listbox, Flex } from "@servicetitan/anvil2";

type Item = {
  id: number;
  label: string;
  disabled?: boolean;
  "data-interactive"?: string;
};

function App() {
  const itemsList: Item[] = [
    { id: 1, label: "Rest" },
    { id: 2, label: "Hover", "data-interactive": "hover" },
    { id: 3, label: "Focus", "data-interactive": "focus-visible" },
    { id: 4, label: "Disabled", disabled: true },
  ];

  return (
    <Flex gap={4}>
      <Listbox items={itemsList} gap={4} flex="1">
        {({ items }) =>
          items.map((item) => (
            <Listbox.Option
              key={item.label}
              item={item}
              disabled={item.disabled}
              {...(item["data-interactive"]
                ? { "data-interactive": item["data-interactive"] }
                : {})}
            >
              {item.label}
            </Listbox.Option>
          ))
        }
      </Listbox>
      <Listbox<Item>
        selectionMode="multiple"
        items={itemsList}
        gap={4}
        defaultSelected={itemsList}
        flex="1"
      >
        {({ items }) =>
          items.map((item) => (
            <Listbox.Option
              key={item.label}
              item={item}
              disabled={item.disabled}
              {...(item["data-interactive"]
                ? { "data-interactive": item["data-interactive"] }
                : {})}
            >
              Selected {item.label}
            </Listbox.Option>
          ))
        }
      </Listbox>
    </Flex>
  );
}

export default App;
