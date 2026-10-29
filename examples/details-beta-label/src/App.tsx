import { Details } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <div style={{ maxWidth: "32rem" }}>
      <Details>
        <Details.Summary
          label="Open *estimates* from ==this week=="
          labelProps={{
            size: "large",
            moreInfo: "Totals include parts, labor, and permits.",
          }}
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
