import { IconMic } from "@servicetitan/anvil2-icons";
import { DecorativeIcon } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <DecorativeIcon icon={<IconMic />} origin="user" />
      <DecorativeIcon icon={<IconMic />} origin="system" />
      <DecorativeIcon icon={<IconMic />} origin="ai" />
    </div>
  );
}

export default App;
