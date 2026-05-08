import { ArtifactCard } from "@servicetitan/anvil2-ext-atlas";
import { Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={3} style={{ width: "600px" }}>
      <ArtifactCard
        title="Insights for Invoice #10492"
        description="Single-visit industrial install, closed under quote with a 40% margin."
        artifactId="insight-1"
        onClick={() => console.log("artifact 1 clicked")}
      />
      <ArtifactCard
        title="Customer note draft"
        description="Plain-language summary of the variance for sending to the customer."
        artifactId="insight-2"
        active
        onClick={() => console.log("artifact 2 clicked")}
      />
    </Flex>
  );
}

export default App;
