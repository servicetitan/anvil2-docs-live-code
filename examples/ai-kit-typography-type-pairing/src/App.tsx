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

const divider = {
  height: primitive.size["25"],
  backgroundColor: primitive.color.neutral["300"],
  border: "none" as const,
  margin: 0,
};

function App() {
  return (
    <div style={column}>
      <div style={stack}>
        <Text
          variant="headline"
          el="h3"
          size="major"
          text="Heading/body text"
        />
        <Text size="fine" text="Extra-Large 32px → Body Large 18px" />
        <Text
          variant="headline"
          el="h2"
          size="hero"
          text="Section title here"
        />
        <Text
          size="featured"
          text="Supporting body text that explains the section in a sentence or two."
        />
      </div>
      <div style={stack}>
        <Text size="fine" text="Large 24px → Body Base 16px" />
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
      </div>
      <hr style={divider} />
      <div style={stack}>
        <Text size="fine" text="Medium 20px → Body Small 14px" />
        <Text
          variant="headline"
          el="h3"
          size="substantial"
          text="Section title here"
        />
        <Text
          size="compact"
          text="Supporting body text that explains the section in a sentence or two."
        />
      </div>
      <div style={stack}>
        <Text size="fine" text="Small 16px → Caption 12px" />
        <Text
          variant="headline"
          el="h4"
          size="regular"
          text="Section title here"
        />
      </div>
    </div>
  );
}

export default App;
