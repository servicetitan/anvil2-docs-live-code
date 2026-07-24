import { ArtifactCard } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: "33rem",
      }}
    >
      {/* With description */}
      <ArtifactCard
        artifactType="document"
        title="Service agreement summary"
        description="Key terms and signatures extracted from the contract."
        onPress={() => {}}
      />

      {/* Without description */}
      <ArtifactCard
        artifactType="document"
        title="Service agreement summary"
        onPress={() => {}}
      />
    </div>
  );
}

export default App;
