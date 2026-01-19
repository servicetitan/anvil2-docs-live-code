import { Page } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem" }}>
      <Page.Header
        title="Page Title"
        breadcrumbs={[
          { href: "/", children: "Home" },
          { children: "Current Page" },
        ]}
      />
    </div>
  );
}

export default App;
