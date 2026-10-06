import { Chip, Flex } from "@servicetitan/anvil2";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <Flex gap="4" alignItems="center">
      <Chip label="Needs review" icon={Warning} />
      <Chip label="Needs review" icon={Warning} size="small" />
    </Flex>
  );
}

export default App;
