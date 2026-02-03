import { Welcome } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card style={{ height: "600px", width: "388px" }}>
      <Welcome
        onContinue={() => console.log("continue clicked")}
        title="Welcome to Atlas"
        subtitle="Your AI Assistant"
      />
    </Card>
  );
}

export default App;
