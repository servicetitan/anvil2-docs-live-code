import { Toolbar } from "@servicetitan/anvil2/beta";
import { useState, ChangeEvent } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <Toolbar associatedContent="data table toolbar">
          <Toolbar.Search
            placeholder="Search records..."
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            onClear={() => setSearchValue("")}
          />

          <Toolbar.Button onClick={() => console.log("Export button clicked")}>
            Export
          </Toolbar.Button>
        </Toolbar>
      </div>
    </div>
  );
}

export default App;
