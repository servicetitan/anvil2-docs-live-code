import { SideNav, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text el="h2" variant="headline" id="first-nav">
        First Navigation Landmark
      </Text>
      <SideNav aria-labelledby="first-nav">
        <SideNav.Link id="first-01">Item 1-1</SideNav.Link>
        <SideNav.Link id="first-02">Item 1-2</SideNav.Link>
      </SideNav>
      <Text el="h2" variant="headline" id="second-nav">
        Second Navigation Landmark
      </Text>
      <SideNav aria-labelledby="second-nav">
        <SideNav.Link id="second-01">Item 2-1</SideNav.Link>
        <SideNav.Link id="second-02">Item 2-2</SideNav.Link>
      </SideNav>
    </Flex>
  );
}

export default App;
