import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive, semantic } from "@servicetitan/anvil2-ai-kit/tokens";

const row = {
  display: "flex" as const,
  flexDirection: "row" as const,
  gap: primitive.size["800"],
  alignItems: "stretch" as const,
};

const column = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: primitive.size["800"],
  flex: 1,
  minWidth: 0,
};

const stack = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: primitive.size["200"],
};

const recipeLabel = {
  color: semantic.foreground.color.subtle,
};

const divider = {
  width: primitive.size["25"],
  alignSelf: "stretch" as const,
  backgroundColor: primitive.color.neutral["300"],
  flexShrink: 0,
};

function App() {
  return (
    <div style={row}>
      <div style={column}>
        <Text variant="headline" el="h3" size="major" text="Eyebrow/value" />
        <div style={row}>
          <div style={stack}>
            <div style={recipeLabel}>
              <Text size="fine" text="Smaller, denser UI" />
            </div>
            <Text variant="eyebrow" text="Total jobs" />
            <Text variant="headline" el="h3" size="major" text="4,821" />
          </div>
          <div style={stack}>
            <div style={recipeLabel}>
              <Text size="fine" text="Big dashboard numbers" />
            </div>
            <Text variant="eyebrow" text="Total jobs" />
            <Text variant="headline" el="h2" size="hero" text="4,821" />
          </div>
        </div>
      </div>
      <div style={divider} />
      <div style={column}>
        <Text
          variant="headline"
          el="h3"
          size="major"
          text="Eyebrow/value/caption"
        />
        <div style={row}>
          <div style={stack}>
            <div style={recipeLabel}>
              <Text size="fine" text="Smaller, denser UI" />
            </div>
            <Text variant="eyebrow" text="Total jobs" />
            <Text variant="headline" el="h3" size="major" text="4,821" />
            <Text size="fine" text="12% vs last period" />
          </div>
          <div style={stack}>
            <div style={recipeLabel}>
              <Text size="fine" text="Big dashboard numbers" />
            </div>
            <Text variant="eyebrow" text="Total jobs" />
            <Text variant="headline" el="h2" size="hero" text="4,821" />
            <Text size="fine" text="12% vs last period" />
          </div>
        </div>
      </div>
      <div style={divider} />
      <div style={column}>
        <Text variant="headline" el="h3" size="major" text="Empty state" />
        <div style={stack}>
          <Text
            variant="headline"
            el="h4"
            size="regular"
            text="No data available"
          />
          <Text
            size="fine"
            text="Try adjusting your filters or date range to see results"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
