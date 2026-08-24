import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive, semantic } from "@servicetitan/anvil2-ai-kit/tokens";

const tiles = [
  {
    label: "Subtle",
    color: semantic.border.color.subtle,
  },
  {
    label: "Standard",
    color: semantic.border.color.standard,
  },
  {
    label: "Prominent",
    color: semantic.border.color.prominent,
  },
  {
    label: "Accent",
    color: semantic.border.color.accent,
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: primitive.size["800"],
      }}
    >
      {tiles.map((tile) => (
        <div
          key={tile.label}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: primitive.size["200"],
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              boxSizing: "border-box",
              borderRadius: primitive.radius["400"],
              backgroundColor: primitive.color.neutral["0"],
              border: "4px solid " + tile.color,
            }}
          />
          <Text size="fine" text={tile.label} />
        </div>
      ))}
    </div>
  );
}

export default App;
