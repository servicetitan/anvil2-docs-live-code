import { ArtifactCard, CartoTheme } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

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
