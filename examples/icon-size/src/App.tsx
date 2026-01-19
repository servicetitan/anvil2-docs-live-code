import { Icon, Text } from "@servicetitan/anvil2";
import Close from "@servicetitan/anvil2/assets/icons/material/round/close.svg";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        fontFamily: "monospace",
        gridTemplateColumns: "60px 60px 60px 60px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Icon svg={Close} size="small" />
      <Icon svg={Close} size="medium" />
      <Icon svg={Close} size="large" />
      <Icon svg={Close} size="xlarge" />
      <Text>small</Text>
      <Text>medium</Text>
      <Text>large</Text>
      <Text>xlarge</Text>
    </div>
  );
}

export default App;
