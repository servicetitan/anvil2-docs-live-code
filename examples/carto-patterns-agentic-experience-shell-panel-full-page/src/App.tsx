import { useState } from "react";
import {
  AppHeader,
  CartoTheme,
  ChatHistory,
  ChatLayout,
  PromptBar,
  Text,
  Window,
  useAppSurface,
  type ChatHistoryItem,
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
      <Window
        defaultState="fullscreen"
        header={<WindowHeader />}
        rail={
          <ChatHistory items={historyItems} defaultSelectedKeys={["current"]} />
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
        artifact={
          <div style={{ height: "100%", padding: 16 }}>
            <Text text="Supporting content" />
          </div>
        }
      />
    </CartoTheme>
  );
}

export default App;
