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
      <Text variant="headline" el="h2" size="hero" text="Explore new ideas" />
      <Text
        size="featured"
        text="Discover simple ways to improve your workflow and create better experiences."
      />
    </div>
  );
}

export default App;
