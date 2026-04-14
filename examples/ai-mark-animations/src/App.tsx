import { AiMark, Button, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" gap="8">
      <AiMark type="gradient" size="xlarge" forceAnimate />
      <Button size="medium" appearance="secondary" aiMark>
        Hover to animate
      </Button>
    </Flex>
  );
}

export default App;
