import { Button } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        alignItems: "center",
      }}
    >
      <Button label="Primary" variant="primary" isDisabled />
      <Button label="Secondary" variant="secondary" isDisabled />
      <Button label="Ghost" variant="ghost" isDisabled />
      <Button label="Danger" variant="danger" isDisabled />
    </div>
  );
}

export default App;
