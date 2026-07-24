import {
  CartoTheme,
  SuggestionList,
  UserMediaMessage,
  UserMessage,
  type MediaAttachment,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const media: MediaAttachment = {
  kind: "document",
  fileName: "Service agreement.pdf",
  fileTypeLabel: "PDF",
  href: "https://example.com/service-agreement.pdf",
};

const timestamp = new Date(2026, 3, 1, 16, 40);

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "48rem",
        }}
      >
        <UserMediaMessage
          media={media}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <UserMessage
          content="Summarize this agreement and flag anything unusual."
          timestamp={timestamp}
        />
        <SuggestionList
          suggestions={["Focus on payment terms", "Check renewal conditions"]}
          onSelect={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
