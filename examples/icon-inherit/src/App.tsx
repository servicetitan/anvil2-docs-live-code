import { Icon, Text } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        fontFamily: "monospace",
        gridTemplateColumns: "140px 140px 140px",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <span>
        <Icon svg={Warning} size="large" />
      </span>
      <span style={{ color: core.semantic.BackgroundColorDanger.value }}>
        <Icon svg={Warning} size="large" inherit />
      </span>
      <span style={{ color: "#FF0000" }}>
        <Icon svg={Warning} size="large" inherit />
      </span>
      <Text>no color added</Text>
      <Text>token value (recommended)</Text>
      <Text>raw hex value (not recommended)</Text>
    </div>
  );
}

export default App;
