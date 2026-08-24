import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";
import ErrorIllustration from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-mechanical-error-light.svg";

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
      <ErrorIllustration aria-hidden="true" height={200} />
    </div>
  );
}

export default App;
