import { useState } from "react";
import {
  TreeSelectField,
  type TreeSelectFieldValue,
} from "@servicetitan/anvil2/beta";

function App() {
  const [selected, setSelected] = useState<TreeSelectFieldValue[]>([]);

  return (
    <div style={{ width: 384 }}>
      <TreeSelectField
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
      />
    </div>
  );
}

export default App;
