import { SuggestionList } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <SuggestionList
      suggestions={[
        "What can you help me with?",
        "Order more",
        "Show recent updates",
      ]}
      onSelect={() => {}}
    />
  );
}

export default App;
