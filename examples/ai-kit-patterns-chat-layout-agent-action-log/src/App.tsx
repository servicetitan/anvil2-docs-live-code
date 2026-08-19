import {
  ActionLog,
  CartoTheme,
  type ActionLogStep,
} from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

const steps: ActionLogStep[] = [
  {
    id: "review",
    title: "Reviewed the service agreement",
    status: "success",
  },
  {
    id: "summary",
    title: "Prepared the summary",
    status: "success",
  },
];

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <ActionLog steps={steps} defaultExpanded={false} />
      </div>
    </CartoTheme>
  );
}

export default App;
