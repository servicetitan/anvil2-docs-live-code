import { Listbox } from "@servicetitan/anvil2";

type Item = {
  id: number;
  label: string;
  disabled?: boolean;
};

function App() {
  const itemGroups: Item[][] = [
    [
      { id: 1, label: "Apple" },
      { id: 2, label: "Banana" },
    ],
    [
      { id: 1, label: "Yam" },
      { id: 2, label: "Zucchini" },
    ],
  ];

  return (
    <Listbox
      selectionMode="multiple"
      aria-label="Single select example"
      defaultSelected={[
        itemGroups[0][1].label,
        itemGroups[1][0].label,
        itemGroups[1][1].label,
      ]}
    >
      <Listbox.OptionGroup label="Fruits">
        {itemGroups[0].map((item, i) => {
          return (
            <Listbox.Option
              key={i}
              label={`${item.label}`}
              disabled={item.disabled}
            >
              {item.label}
            </Listbox.Option>
          );
        })}
      </Listbox.OptionGroup>
      <Listbox.OptionGroup label="Vegetables">
        {itemGroups[1].map((item, i) => {
          return (
            <Listbox.Option key={i} label={`${item.label}`}>
              {item.label}
            </Listbox.Option>
          );
        })}
      </Listbox.OptionGroup>
    </Listbox>
  );
}

export default App;
