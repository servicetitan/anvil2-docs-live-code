import { Page } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <div style={{ minWidth: "23rem" }}>
      <Page.Header
        title="Page Title"
        chips={[
          { label: "Status" },
          {
            label: "Draft",
            color: core?.primitive?.ColorPurple200.value,
          },
        ]}
      />
    </div>
  );
}

export default App;
