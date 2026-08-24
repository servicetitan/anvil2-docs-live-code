import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";

const tiles = [
  {
    label: "Neutral 800",
    color: primitive.color.neutral["800"],
  },
  {
    label: "Neutral 600",
    color: primitive.color.neutral["600"],
  },
  {
    label: "Disabled",
    color: primitive.color.neutral["300"],
  },
  {
    label: "Highlight",
    color: primitive.color.blue["600"],
  },
  {
    label: "Neutral 950",
    color: primitive.color.neutral["950"],
  },
  {
    label: "Neutral 0",
    color: primitive.color.neutral["0"],
    bordered: true,
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
              backgroundColor: tile.color,
              border: tile.bordered
                ? "2px solid " + primitive.color.neutral["300"]
                : undefined,
            }}
          />
          <Text size="fine" text={tile.label} />
        </div>
      ))}
    </div>
  );
}

export default App;
