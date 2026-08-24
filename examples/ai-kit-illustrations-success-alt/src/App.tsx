import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";
import SuccessAlt from "@servicetitan/anvil2-illustrations/illustrations/empty-state-commercial-evergreen-success-light.svg";

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
      <SuccessAlt aria-hidden="true" height={200} />
    </div>
  );
}

export default App;
