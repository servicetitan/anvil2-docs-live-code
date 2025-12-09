import { Listbox } from "@servicetitan/anvil2";

function App() {
  const itemsList = [
    { id: 1, label: "First item" },
    { id: 2, label: "Second item" },
    { id: 3, label: "Third item", disabled: true },
    { id: 4, label: "Fourth item" },
    { id: 5, label: "Fifth item" },
  ];

  return (
    <Listbox items={itemsList} defaultSelected={itemsList[1]}>
      {({ items }) =>
        items.map((item) => (
          <Listbox.Option key={item.label} item={item} disabled={item.disabled}>
            {item.label}
          </Listbox.Option>
        ))
      }
    </Listbox>
  );
}

export default App;
