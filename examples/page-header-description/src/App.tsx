import { Page, Text, Link } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem" }}>
      <Page.Header
        title="Page Title"
        description={
          <Text>
            This page demonstrates all header elements with{" "}
            <Link href="#" appearance="primary">
              standard actions
            </Link>
          </Text>
        }
      />
    </div>
  );
}

export default App;
