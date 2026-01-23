import { Tab, Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Tab defaultIndex={0} style={{ minWidth: "55rem" }}>
      <Tab.List>
        <Tab.Button id="t1" controls="p1" onClick={console.log}>
          <Flex gap={2} alignItems="center">
            All
            <Chip label="55" size="small" />
          </Flex>
        </Tab.Button>
        <Tab.Button id="t2" controls="p2" onClick={console.log}>
          <Flex gap={2} alignItems="center">
            Foo
            <Chip label="18" size="small" />
          </Flex>
        </Tab.Button>
        <Tab.Button id="t3" controls="p3" onClick={console.log}>
          <Flex gap={2} alignItems="center">
            Bar
            <Chip
              label="37"
              size="small"
              color={core.semantic?.StatusColorDanger?.value}
            />
          </Flex>
        </Tab.Button>
      </Tab.List>
    </Tab>
  );
}

export default App;
