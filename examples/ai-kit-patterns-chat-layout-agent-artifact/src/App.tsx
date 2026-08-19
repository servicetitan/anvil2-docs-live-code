import { ArtifactCard, CartoTheme } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <ArtifactCard
          artifactType="document"
          title="Service agreement summary"
          description="Key terms and the proposed schedule update."
          onPress={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
