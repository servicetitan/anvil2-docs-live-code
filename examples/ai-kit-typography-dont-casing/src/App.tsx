import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";

const stack = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: primitive.size["200"],
};

function App() {
  return (
    <div style={stack}>
      <Text variant="headline" el="h2" size="hero" text="Create impact" />
      <Text
        variant="headline"
        el="h3"
        size="major"
        text="Transforming possibilities into impact."
      />
      <Text
        size="compact"
        text="Create smarter, more impactful solutions that inspire progress and drive meaningful change."
      />
    </div>
  );
}

export default App;
