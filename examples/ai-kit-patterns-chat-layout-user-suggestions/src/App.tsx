import { CartoTheme, SuggestionList } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <SuggestionList
          suggestions={["Focus on payment terms", "Check renewal conditions"]}
          onSelect={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
