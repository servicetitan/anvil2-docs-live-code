import { Tab, Flex, Icon } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <Tab defaultIndex={0}>
      <Tab.List>
        <Tab.Button id="t1" controls="p1" onClick={console.log}>
          Tab A
        </Tab.Button>
        <Tab.Button id="t2" controls="p2" onClick={console.log}>
          Tab B
        </Tab.Button>
        <Tab.Button id="t3" controls="p3" onClick={console.log}>
          <Flex gap={2} alignItems="center">
            Tab C
            <Icon
              size="medium"
              svg={Warning}
              color={core.semantic?.StatusColorDanger?.value}
            />
          </Flex>
        </Tab.Button>
      </Tab.List>
    </Tab>
  );
}

export default App;
