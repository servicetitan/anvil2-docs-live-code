import { Listbox } from "@servicetitan/anvil2";

type Item = {
  id: number;
  label: string;
  disabled?: boolean;
  "data-interactive"?: string;
};

function App() {
  const itemGroups: Item[][] = [
    [
      { id: 1, label: "This is a really long option that will wrap" },
      { id: 2, label: "This is a really long selected option that will wrap" },
    ],
    [{ id: 1, label: "Option" }],
  ];

  return (
    <Listbox
      aria-label="Single select example"
      defaultSelected={itemGroups[0][1].label}
      style={{ maxWidth: "280px" }}
    >
      <Listbox.OptionGroup label="Group">
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
      <Listbox.OptionGroup label="This is a really long group that will wrap">
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
