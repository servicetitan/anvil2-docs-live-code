import { ListView, Text } from "@servicetitan/anvil2";

type Item = {
  id: string;
  label: string;
  disabled?: boolean;
  parentId?: string;
};

function App() {
  const listItems: Item[] = [
    { id: "dt", label: "Design Technologists" },
    { id: "ben", label: "Ben Ho", parentId: "dt" },
    { id: "helen", label: "Helen Holmes", parentId: "dt" },
    { id: "james", label: "James Coyle", parentId: "dt" },
    { id: "nick", label: "Nick Sands", parentId: "dt" },
    { id: "uie", label: "UI Engineers" },
    { id: "adam", label: "Adam Lantz", parentId: "uie" },
    { id: "derek", label: "Derek Watson", parentId: "uie" },
    { id: "erica", label: "Erica Gugliemella", parentId: "uie" },
    { id: "patrick", label: "Patrick Buckingham", parentId: "uie" },
    { id: "ryan", label: "Ryan De La Torre", parentId: "uie" },
  ];

  return (
    <ListView
      items={listItems}
      // in reality, these should be managed by separate logic/state
      selected={[listItems[1], listItems[3]]}
      indeterminate={[listItems[0]]}
    >
      {(_items) =>
        listItems.map((item) => (
          <ListView.Option
            key={item.label}
            item={item}
            disabled={item.disabled}
            style={{
              marginLeft: item.parentId ? "1rem" : undefined,
            }}
          >
            <Text flexGrow={1}>{item.label}</Text>
          </ListView.Option>
        ))
      }
    </ListView>
  );
}

export default App;
