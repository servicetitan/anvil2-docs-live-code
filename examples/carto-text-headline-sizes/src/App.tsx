import { Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Text variant="headline" el="h2" size="hero" text="Headline — hero" />
      <Text variant="headline" el="h2" size="major" text="Headline — major" />
      <Text
        variant="headline"
        el="h2"
        size="substantial"
        text="Headline — substantial"
      />
      <Text
        variant="headline"
        el="h2"
        size="regular"
        text="Headline — regular"
      />
    </div>
  );
}

export default App;
