import { Text } from "@servicetitan/anvil2-ai-kit";
import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";

function App() {
  return (
    <div
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
          backgroundImage:
            "linear-gradient(200deg, " +
            primitive.color.blue["700"] +
            ", " +
            primitive.color.blue["600"] +
            ")",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: primitive.size["100"],
        }}
      >
        <Text size="fine" text="Decorative gradient" />
        <Text size="compact" text="Blue/700 → Blue/600" />
        <Text
          size="fine"
          text="135° diagonal — light to dark, top-right to bottom-left"
        />
      </div>
    </div>
  );
}

export default App;
