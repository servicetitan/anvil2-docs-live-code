import { CartoTheme, ChatHistory } from "@servicetitan/carto-react-kit";
import type { ChatHistoryItem } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

// `subtitle` is rendered verbatim — the consumer owns any relative-time
// formatting. These four rows show the range a stamp typically takes: a
// relative duration, a clock time, a day name, and an absolute date.
const items: ChatHistoryItem[] = [
  { id: "auth", label: "Refactoring the auth flow", subtitle: "35 mins" },
  { id: "karaoke", label: "Karaoke track separation", subtitle: "10:40am" },
  {
    id: "onboarding",
    label: "Rewrite the onboarding email",
    subtitle: "Yesterday",
  },
  { id: "schema", label: "Postgres schema migration plan", subtitle: "Mar 14" },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 240,
          height: 370,
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
