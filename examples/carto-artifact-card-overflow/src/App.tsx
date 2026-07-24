import { ArtifactCard } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "33rem" }}>
      <ArtifactCard
        artifactType="document"
        title="Comprehensive service agreement summary across every clause and amendment"
        description="Key terms, signatures, adjuster notes, and the full history of Atlas's edits to this contract over the past two weeks."
        onPress={() => {}}
      />
    </div>
  );
}

export default App;
