import { Chip, Flex } from "@servicetitan/anvil2";
import dog01 from "../assets/dog-01.png";

function App() {
  return (
    <Flex gap="4" alignItems="center">
      <Chip label="Ben Ho" avatar={dog01} />
      <Chip label="Ben Ho" avatar={dog01} size="small" />
    </Flex>
  );
}

export default App;
