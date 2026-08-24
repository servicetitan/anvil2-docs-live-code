import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";
import FirstUse from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-light.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: primitive.size["800"],
      }}
    >
      <FirstUse aria-hidden="true" height={200} />
    </div>
  );
}

export default App;
