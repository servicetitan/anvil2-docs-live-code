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
  IconMinimize2,
  IconPanelLeft,
  IconPanelRight,
  IconX,
} from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

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
  const { close, toggleArtifact, toggleRail, toggleSize } = useAppSurface();

  return (
    <AppHeader
      title="Title of conversation"
      leadingActions={[
        {
          id: "history",
          icon: <IconPanelLeft />,
          label: "Toggle chat history",
          onPress: toggleRail,
        },
      ]}
      trailingActions={[
        {
          id: "artifact",
          icon: <IconPanelRight />,
          label: "Toggle artifact panel",
          onPress: toggleArtifact,
        },
        {
          id: "restore",
          icon: <IconMinimize2 />,
          label: "Restore",
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
      <div style={{ position: "fixed", inset: 0, background: "#e9ecf1" }}>
        <Window
          defaultState="fullscreen"
          header={<WindowHeader />}
          rail={
            <ChatHistory
              items={historyItems}
              defaultSelectedKeys={["current"]}
            />
          }
          chat={
            <ChatLayout
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
