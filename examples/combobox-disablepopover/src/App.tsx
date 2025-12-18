import { Combobox, Popover } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: string;
  name: string;
};

const technicians = [
  { id: "cs-0", name: "Cory Sparks" },
  { id: "jb-1", name: "Jessica Brees" },
  { id: "jc-2", name: "Johnny Carpenter" },
  { id: "rp-3", name: "Rusty Pipes" },
  { id: "sp-4", name: "Silvia Plomería" },
];

function App() {
  const [selectedItems, setSelectedItems] = useState<Item[] | null>([]);

  return (
    <div style={{ minHeight: "284px", paddingInlineEnd: "18rem" }}>
      <Popover placement="right-start" defaultOpen>
        <Popover.Button>Add technician(s)</Popover.Button>
        <Popover.Content>
          <Combobox
            multiple
            items={technicians}
            itemToString={(item) => (item ? item.name : "")}
            itemToKey={(item) => (item ? item.id : null)}
            selectedItems={selectedItems ?? []}
            onChange={setSelectedItems}
            filterOptions={{ keys: ["name"] }}
            style={{ width: "15rem" }}
          >
            <Combobox.SearchField label="Label" />
            <Combobox.Content disablePopover>
              {({ items }) => (
                <Combobox.List>
                  {items.map((item, i) => (
                    <Combobox.Item key={item.id} item={item} index={i}>
                      {item.name}
                    </Combobox.Item>
                  ))}
                </Combobox.List>
              )}
            </Combobox.Content>
          </Combobox>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
