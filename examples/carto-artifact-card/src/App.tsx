import { ArtifactCard } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "33rem" }}>
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
