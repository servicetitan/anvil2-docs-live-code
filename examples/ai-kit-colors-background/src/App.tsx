import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";

const tiles = [
  {
    label: "Blue-gray 10",
    color: primitive.color["blue-grey"]["10"],
    bordered: true,
  },
  {
    label: "Blue-50",
    color: primitive.color.blue["50"],
  },
  {
    label: "Neutral-0",
    color: primitive.color.neutral["0"],
    bordered: true,
  },
  {
    label: "Neutral-50",
    color: primitive.color.neutral["50"],
  },
  {
    label: "Neutral-500",
    color: primitive.color.neutral["500"],
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
