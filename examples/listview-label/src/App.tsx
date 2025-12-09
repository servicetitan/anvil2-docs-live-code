import { ListView, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ListView>
      <ListView.Option label="first">
        <Text>First Value</Text>
      </ListView.Option>
      <ListView.Option label="second">
        <Text>Second Value</Text>
      </ListView.Option>
      <ListView.Option label="third">
        <Text>Third Value</Text>
      </ListView.Option>
    </ListView>
  );
}

export default App;
