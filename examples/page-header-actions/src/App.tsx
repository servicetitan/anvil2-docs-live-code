import { Page } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem" }}>
      <Page.Header
        title="Page Title"
        actions={{
          primary: {
            label: "Primary Action",
            onClick: () => console.log("Primary clicked"),
          },
          secondary: [
            {
              label: "Secondary Action",
              onClick: () => console.log("Secondary clicked"),
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
