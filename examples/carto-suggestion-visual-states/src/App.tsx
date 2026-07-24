import { Suggestion } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Suggestion label="Default" />
      <Suggestion label="Hover" data-interactive="hover" />
      <Suggestion label="Pressed" data-interactive="active" />
      <Suggestion label="Focus" data-interactive="focus-visible" />
    </div>
  );
}

export default App;
