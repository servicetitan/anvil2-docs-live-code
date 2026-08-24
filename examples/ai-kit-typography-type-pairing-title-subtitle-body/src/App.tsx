import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";

const column = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: primitive.size["800"],
};

const stack = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: primitive.size["200"],
};

function App() {
  return (
    <div style={column}>
      <Text
        variant="headline"
        el="h3"
        size="major"
        text="Title/subtitle/body text"
      />
      <div style={stack}>
        <Text size="fine" text="32 / 18 / 14px" />
        <Text
          variant="headline"
          el="h2"
          size="hero"
          text="Section title here"
        />
        <Text
          size="regular"
          text="Supporting body text that explains the section in a sentence or two."
        />
        <Text
          size="compact"
          text="Supporting body text that explains the section in a sentence or two."
        />
      </div>
      <div style={stack}>
        <Text size="fine" text="24 / 16 / 12px" />
        <Text
          variant="headline"
          el="h3"
          size="major"
          text="Section title here"
        />
        <Text
          size="regular"
          text="Supporting body text that explains the section in a sentence or two."
        />
        <Text
          size="fine"
          text="Supporting body text that explains the section in a sentence or two."
        />
      </div>
    </div>
  );
}

export default App;
