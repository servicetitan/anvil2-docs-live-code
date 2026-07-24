import {
  AgentMediaCard,
  CartoTheme,
  type MediaAttachment,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const media: MediaAttachment = {
  kind: "document",
  fileName: "Service agreement.pdf",
  fileTypeLabel: "PDF",
  href: "https://example.com/service-agreement.pdf",
};

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <AgentMediaCard media={media} showPreview={false} />
      </div>
    </CartoTheme>
  );
}

export default App;
