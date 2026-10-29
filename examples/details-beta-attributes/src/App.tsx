import { Details } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <div style={{ maxWidth: "48rem" }}>
      <Details defaultExpanded>
        <Details.Summary
          label="Job pricing"
          templateColumns="2fr 1fr auto auto auto"
          attributes={[
            { type: "text", label: "Total", value: "$4,820.00" },
            { type: "chip", label: "Open", color: "#cce3ff" },
            { type: "button", label: "Review", onClick: () => {} },
            {
              type: "menu",
              label: "Actions",
              items: [
                { label: "Edit", onClick: () => {} },
                { label: "Duplicate", onClick: () => {} },
                { label: "Delete", disabled: true },
              ],
            },
          ]}
        />
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Details.Content>
      </Details>
    </div>
  );
}

export default App;
