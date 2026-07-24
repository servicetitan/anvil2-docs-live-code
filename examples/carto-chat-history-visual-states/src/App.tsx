import { CartoTheme, ChatHistory } from "@servicetitan/carto-react-kit";
import type { ChatHistoryItem } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const items: ChatHistoryItem[] = [
  { id: "default", label: "Default", subtitle: "Just now" },
  { id: "hover", label: "Hover target", subtitle: "35 mins" },
  { id: "focus", label: "Focus target", subtitle: "10:40am" },
  { id: "disabled", label: "Disabled", subtitle: "Yesterday" },
  { id: "selected", label: "Selected", subtitle: "Friday" },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 240,
          height: 460,
          background: "var(--carto-color-background-surface, #f5f5f5)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <ChatHistory
          items={items}
          defaultSelectedKeys={["selected"]}
          disabledKeys={["disabled"]}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
