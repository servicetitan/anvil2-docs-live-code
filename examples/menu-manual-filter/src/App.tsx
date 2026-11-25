import { useState } from "react";
import { Menu } from "@servicetitan/anvil2";

const customers = [
  "Acme Plumbing",
  "Birch Heating",
  "Cedar HVAC",
  "Delta Electric",
];

function App() {
  const [search, setSearch] = useState("");
  const matches = customers.filter((name) =>
    name.toLowerCase().startsWith(search.toLowerCase()),
  );

  return (
    <div style={{ minHeight: "400px" }}>
      <Menu
        label="Customer"
        searchable
        manualFilter
        searchValue={search}
        onSearchChange={setSearch}
      >
        {matches.map((name) => (
          <Menu.Item key={name} label={name} onClick={console.log} />
        ))}
      </Menu>
    </div>
  );
}

export default App;
