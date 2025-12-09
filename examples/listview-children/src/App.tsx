import { ListView, Text } from "@servicetitan/anvil2";

type Item = {
  email: string;
  label: string;
  disabled?: boolean;
};

function App() {
  const listItems: Item[] = [
    { label: "Ben Ho", email: "ben@servicetitan" },
    { label: "Derek Watson", email: "derek@servicetitan" },
    { label: "James Coyle", email: "james@servicetitan" },
    {
      label: "Jess Paris",
      email: "jess@servicetitan",
      disabled: true,
    },
    { label: "Nick Sands", email: "nick@servicetitan" },
    { label: "Patrick Buckingham", email: "patrick@servicetitan" },
    { label: "Ryan De La Torre", email: "ryan@servicetitan" },
  ];

  return (
    <ListView items={listItems}>
      {(_items) =>
        listItems.map((item) => (
          <ListView.Option
            key={item.label}
            item={item}
            disabled={item.disabled}
          >
            <Text flexGrow={1}>{item.label}</Text>
          </ListView.Option>
        ))
      }
    </ListView>
  );
}

export default App;
