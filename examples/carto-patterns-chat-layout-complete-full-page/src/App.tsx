import { useState } from "react";
import {
  ActionLog,
  AgentMediaCard,
  AgentMessage,
  AgentThinking,
  ArtifactCard,
  CartoTheme,
  ChatLayout,
  PromptBar,
  SuggestionList,
  Text,
  UserMessage,
  type ActionLogStep,
  type MediaAttachment,
} from "@servicetitan/carto-react-kit";
import * as cartoTokens from "@servicetitan/carto-react-kit/tokens";
import "@servicetitan/carto-react-kit/styles.css";

const { primitive } =
  cartoTokens as unknown as typeof import("@servicetitan/carto-tokens/vanilla-extract");

const media: MediaAttachment = {
  kind: "document",
  fileName: "Service agreement.pdf",
  fileTypeLabel: "PDF",
  href: "https://example.com/service-agreement.pdf",
};

const actionSteps: ActionLogStep[] = [
  {
    id: "agreement",
    title: "Reviewed the service agreement",
    status: "success",
  },
  {
    id: "schedule",
    title: "Prepared the arrival window update",
    status: "success",
  },
];

const timestamp = new Date(2026, 3, 1, 16, 40);

function App() {
  const [draft, setDraft] = useState("");

  return (
    <CartoTheme>
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: primitive.color.neutral["20"],
        }}
      >
        <div
          style={{
            width: 768,
            height: 1040,
            overflow: "hidden",
            background: primitive.color.neutral["0"],
            border: `1px solid ${primitive.color.neutral["80"]}`,
          }}
        >
          <ChatLayout
            conversation={
              <>
                <UserMessage
                  content="Update the arrival window and summarize the agreement."
                  timestamp={timestamp}
                />
                <AgentMessage
                  content={
                    <>
                      <ActionLog steps={actionSteps} defaultExpanded={false} />
                      <Text text="I found the agreement and prepared the requested update." />
                      <AgentMediaCard media={media} showPreview={false} />
                      <ArtifactCard
                        artifactType="document"
                        title="Service agreement summary"
                        description="Key terms and the proposed schedule update."
                        onPress={() => {}}
                      />
                    </>
                  }
                  copyText="I found the agreement and prepared the requested update."
                  timestamp={new Date(2026, 3, 1, 16, 40, 30)}
                  onLike={() => {}}
                  onDislike={() => {}}
                />
                <AgentThinking />
                <SuggestionList
                  suggestions={[
                    "Draft a customer update",
                    "Compare with the original",
                  ]}
                  onSelect={() => {}}
                />
              </>
            }
            prompt={
              <PromptBar
                value={draft}
                onChange={setDraft}
                onSend={() => setDraft("")}
                placeholder="Ask anything…"
              />
            }
          />
        </div>
      </div>
    </CartoTheme>
  );
}

export default App;
