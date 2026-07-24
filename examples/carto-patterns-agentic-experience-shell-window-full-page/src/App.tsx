import { useState } from "react";
import {
  AppHeader,
  CartoTheme,
  ChatHistory,
  ChatLayout,
  PromptBar,
  TabbedLayout,
  Text,
  Window,
  useAppSurface,
  type ChatHistoryItem,
  type TabbedLayoutTab,
} from "@servicetitan/carto-react-kit";
import {
  IconGrip,
  IconInbox,
  IconMaximize2,
  IconMinimize2,
  IconPanelLeft,
  IconPanelRight,
  IconX,
} from "@servicetitan/carto-react-kit/icons";
import * as cartoTokens from "@servicetitan/carto-react-kit/tokens";
import "@servicetitan/carto-react-kit/styles.css";

const { primitive } =
  cartoTokens as unknown as typeof import("@servicetitan/carto-tokens/vanilla-extract");

const historyItems: ChatHistoryItem[] = [
  { id: "current", label: "Current conversation", subtitle: "Just now" },
  { id: "previous", label: "Previous conversation", subtitle: "Yesterday" },
];

const artifactTabs: TabbedLayoutTab[] = [
  {
    key: "preview",
    label: "Preview",
    content: <Text text="Generated artifact" />,
  },
];

function WindowHeader() {
  const {
    close,
    dragHandleProps,
    isFullscreen,
    toggleArtifact,
    toggleRail,
    toggleSize,
  } = useAppSurface();

  return (
    <AppHeader
      title="Title of conversation"
      leadingActions={
        isFullscreen
          ? [
              {
                id: "rail",
                icon: <IconPanelLeft />,
                label: "Toggle chat history",
                onPress: toggleRail,
              },
            ]
          : [
              {
                id: "drag",
                icon: <IconGrip />,
                label: "Move window",
                dragHandleProps,
              },
            ]
      }
      trailingActions={[
        ...(isFullscreen
          ? [
              {
                id: "artifact",
                icon: <IconPanelRight />,
                label: "Toggle artifact panel",
                onPress: toggleArtifact,
              },
            ]
          : []),
        {
          id: "inbox",
          icon: <IconInbox />,
          label: "Inbox",
          onPress: () => {},
        },
        {
          id: "size",
          icon: isFullscreen ? <IconMinimize2 /> : <IconMaximize2 />,
          label: isFullscreen ? "Restore" : "Maximize",
          onPress: toggleSize,
        },
        {
          id: "close",
          icon: <IconX />,
          label: "Close",
          onPress: close,
        },
      ]}
    />
  );
}

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <CartoTheme>
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          background: primitive.color.neutral["20"],
        }}
      >
        <Window
          header={<WindowHeader />}
          rail={
            <ChatHistory
              items={historyItems}
              defaultSelectedKeys={["current"]}
            />
          }
          chat={
            <ChatLayout
              conversation={
                <div style={{ padding: 16 }}>
                  <Text text="Conversation content" />
                </div>
              }
              prompt={
                <PromptBar
                  value={prompt}
                  onChange={setPrompt}
                  placeholder="Ask anything…"
                />
              }
            />
          }
          artifact={<TabbedLayout tabs={artifactTabs} />}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
