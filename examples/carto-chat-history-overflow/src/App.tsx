import { CartoTheme, ChatHistory } from "@servicetitan/carto-react-kit";
import type { ChatHistoryItem } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const items: ChatHistoryItem[] = [
  { id: "auth", label: "Refactoring the auth flow", subtitle: "Just now" },
  { id: "q3", label: "Q3 planning notes", subtitle: "35 mins" },
  { id: "karaoke", label: "Karaoke track separation", subtitle: "10:40am" },
  {
    id: "onboarding",
    label: "Rewrite the onboarding email",
    subtitle: "Yesterday",
  },
  {
    id: "schema",
    label: "Postgres schema migration plan",
    subtitle: "Yesterday",
  },
  { id: "pricing", label: "Pricing page copy review", subtitle: "Friday" },
  { id: "incident", label: "Incident postmortem draft", subtitle: "Mar 14" },
  { id: "roadmap", label: "2027 roadmap brainstorm", subtitle: "Mar 12" },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 240,
          height: 280,
          background: "var(--carto-color-background-surface, #f5f5f5)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <ChatHistory items={items} defaultSelectedKeys={["karaoke"]} />
      </div>
    </CartoTheme>
  );
}

export default App;
