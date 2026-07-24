import {
  ActionLog,
  AgentMediaCard,
  AgentMessage,
  AgentThinking,
  ArtifactCard,
  CartoTheme,
  GuidanceCard,
  Markdown,
  type ActionLogStep,
  type GuidanceChangeSection,
  type MediaAttachment,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const steps: ActionLogStep[] = [
  {
    id: "review",
    title: "Reviewed the service agreement",
    status: "success",
  },
];

const media: MediaAttachment = {
  kind: "document",
  fileName: "Service agreement.pdf",
  fileTypeLabel: "PDF",
  href: "https://example.com/service-agreement.pdf",
};

const changes: GuidanceChangeSection[] = [
  {
    type: "single",
    changes: [
      {
        id: "arrival-window",
        label: "Arrival window",
        from: "8–10 AM",
        to: "9–11 AM",
      },
    ],
  },
];

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <AgentMessage
          content={
            <>
              <ActionLog steps={steps} defaultExpanded={false} />
              <Markdown source="I reviewed the agreement and prepared a **summary** with the requested update." />
              <AgentMediaCard media={media} showPreview={false} />
              <ArtifactCard
                artifactType="document"
                title="Service agreement summary"
                description="Key terms and the proposed schedule update."
                onPress={() => {}}
              />
              <GuidanceCard
                referenceLabel="Job #10428"
                changeSections={changes}
                onApply={() => {}}
                onEdit={() => {}}
                onDismiss={() => {}}
              />
            </>
          }
          copyText="I reviewed the agreement and prepared a summary."
          timestamp={new Date(2026, 3, 1, 16, 40)}
          onLike={() => {}}
          onDislike={() => {}}
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
