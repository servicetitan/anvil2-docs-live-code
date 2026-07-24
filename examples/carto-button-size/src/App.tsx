import { Button } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        alignItems: "center",
      }}
    >
      <Button label="Extra Small" size="xsmall" variant="secondary" />
      <Button label="Small" size="small" variant="secondary" />
      <Button label="Medium" size="medium" variant="secondary" />
    </div>
  );
}

export default App;
