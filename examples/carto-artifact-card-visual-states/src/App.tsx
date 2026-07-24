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
      {/* Rest */}
      <ArtifactCard
        artifactType="document"
        title="Service agreement summary"
        description="Key terms and signatures extracted from the contract."
        onPress={() => {}}
      />

      {/* Hover */}
      <ArtifactCard
        artifactType="document"
        title="Service agreement summary"
        description="Key terms and signatures extracted from the contract."
        onPress={() => {}}
      />

      {/* Focus */}
      <ArtifactCard
        artifactType="document"
        title="Service agreement summary"
        description="Key terms and signatures extracted from the contract."
        onPress={() => {}}
      />
    </div>
  );
}

export default App;
