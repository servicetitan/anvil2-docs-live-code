import { CartoTheme, ChatHistory } from "@servicetitan/carto-react-kit";
import type { ChatHistoryItem } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const items: ChatHistoryItem[] = [
  {
    id: "auth",
    label: "Refactoring the auth flow",
    subtitle: "Just now",
    unread: true,
  },
  { id: "q3", label: "Q3 planning notes", subtitle: "35 mins", unread: true },
  { id: "karaoke", label: "Karaoke track separation", subtitle: "Yesterday" },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 240,
          height: 220,
          background: "var(--carto-color-background-surface, #f5f5f5)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <ChatHistory items={items} />
      </div>
    </CartoTheme>
  );
}

export default App;
