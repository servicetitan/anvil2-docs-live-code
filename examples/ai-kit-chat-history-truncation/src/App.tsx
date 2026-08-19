import { CartoTheme, ChatHistory } from "@servicetitan/anvil2-ai-kit";
import type { ChatHistoryItem } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

const items: ChatHistoryItem[] = [
  {
    id: "long",
    label: "A conversation title long enough to overflow the rail width",
    subtitle: "An unread stamp long enough to overflow the rail width too",
  },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 240,
          height: 140,
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
