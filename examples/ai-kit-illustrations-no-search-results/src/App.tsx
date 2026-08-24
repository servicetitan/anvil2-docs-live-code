import { primitive } from "@servicetitan/anvil2-ai-kit/tokens";
import NoSearchResults from "@servicetitan/anvil2-illustrations/illustrations/empty-state-residential-evergreen-no-search-results-light.svg";

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
      <NoSearchResults aria-hidden="true" height={200} />
    </div>
  );
}

export default App;
