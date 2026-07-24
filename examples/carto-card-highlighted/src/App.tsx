import { Card, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: "20rem",
      }}
    >
      {/* Default */}
      <Card content={<Text text="Default surface." />} />

      {/* Highlighted */}
      <Card highlighted content={<Text text="Highlighted surface." />} />
    </div>
  );
}

export default App;
