import { SearchField, Flex, Text, Listbox } from "@servicetitan/anvil2";
import { useState, type ChangeEvent } from "react";

type Item = { id: number; label: string };

function App() {
  const items: Item[] = [
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Cherry" },
    { id: 4, label: "Grape" },
    { id: 5, label: "Kiwi" },
    { id: 6, label: "Mango" },
    { id: 7, label: "Orange" },
    { id: 8, label: "Peach" },
    { id: 9, label: "Pineapple" },
    { id: 10, label: "Strawberry" },
  ];

  const [selected, setSelected] = useState<Item>(items[1]);
  const [result, setResult] = useState<Item[]>(items);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setResult(items);
      return;
    }
    const newResult = items.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setResult(newResult);
  };

  return (
    <Flex direction="column">
      <Text el="h1" variant="headline">
        Fruit
      </Text>
      <Flex gap="6" direction="column">
        <Text variant="body">
          This is description text talking about the fruit.
        </Text>
        <SearchField
          onChange={handleChange}
          placeholder="Search for fruits..."
        />
        <Text el="h3" variant="headline" size="small">
          {result.length} results
        </Text>
        <Listbox
          style={{ padding: 0 }}
          defaultSelected={items[2]}
          items={result}
          selected={selected}
          onSelectionChange={(selection: Item | undefined) => {
            setSelected(
              items.find(
                (item) => item?.label === selection?.label,
              ) as (typeof items)[number],
            );
          }}
        >
          {({ items }) =>
            items.map((item) => (
              <Listbox.Option key={item.label} item={item}>
                {item.label}
              </Listbox.Option>
            ))
          }
        </Listbox>
      </Flex>
    </Flex>
  );
}

export default App;
