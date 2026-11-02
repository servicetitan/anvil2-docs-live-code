import { useState } from "react";
import { Button } from "@servicetitan/anvil2";
import {
  TreeSelectMenu,
  type TreeSelectMenuValue,
} from "@servicetitan/anvil2/beta";

function App() {
  const [selected, setSelected] = useState<TreeSelectMenuValue[]>([]);

  return (
    <div style={{ width: 384 }}>
      <TreeSelectMenu
        label="Select location"
        loadOptions={async (_searchValue, parentNode) => {
          // Simulate network delay
          await new Promise((resolve) => setTimeout(resolve, 300));

          if (parentNode) {
            // Load children for the expanded branch
            if (parentNode.id === "us") {
              return [
                {
                  id: "us-ca",
                  label: "California",
                  children: null,
                },
                {
                  id: "us-ny",
                  label: "New York",
                  children: null,
                },
                {
                  id: "us-tx",
                  label: "Texas",
                },
              ];
            }
            if (parentNode.id === "us-ca") {
              return [
                { id: "us-ca-sf", label: "San Francisco" },
                { id: "us-ca-la", label: "Los Angeles" },
                { id: "us-ca-sd", label: "San Diego" },
              ];
            }
            if (parentNode.id === "us-ny") {
              return [
                { id: "us-ny-nyc", label: "New York City" },
                { id: "us-ny-buf", label: "Buffalo" },
              ];
            }
            if (parentNode.id === "ca") {
              return [
                { id: "ca-on", label: "Ontario" },
                { id: "ca-qc", label: "Quebec" },
                { id: "ca-bc", label: "British Columbia" },
              ];
            }
            return [];
          }

          // Load root nodes
          return [
            {
              id: "us",
              label: "United States",
              children: null,
            },
            {
              id: "ca",
              label: "Canada",
              children: null,
            },
          ];
        }}
        value={selected}
        onSelectedOptionsChange={setSelected}
        trigger={(props) => (
          <Button {...props}>
            {selected.length > 0
              ? `${selected.length} selected`
              : "Select location"}
          </Button>
        )}
      />
    </div>
  );
}

export default App;
