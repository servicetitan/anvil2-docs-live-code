import { ListView, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ListView onSelectionChange={console.log} defaultSelected={["Option2"]}>
      <ListView.Option label="Option">
        <Text flexGrow={1}>Option</Text>
      </ListView.Option>
      <ListView.Option label="Option2">
        <Text flexGrow={1}>Option 2</Text>
        <ListView.OptionCell></ListView.OptionCell>
      </ListView.Option>
    </ListView>
  );
}

export default App;
