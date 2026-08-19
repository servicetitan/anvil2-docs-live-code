import { Button } from "@servicetitan/anvil2-ai-kit";
import { IconPencil } from "@servicetitan/anvil2-icons";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <Button
        label="Edit"
        variant="secondary"
        size="small"
        icon={<IconPencil />}
      />
    </div>
  );
}

export default App;
