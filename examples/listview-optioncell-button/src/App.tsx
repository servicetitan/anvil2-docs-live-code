import { ListView, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <ListView onSelectionChange={console.log} defaultSelected={["Option2"]}>
      <ListView.Option label="Option">
        <Text flexGrow={1}>Option</Text>
        <Button onClick={console.log}>Button</Button>
      </ListView.Option>
      <ListView.Option label="Option2">
        <Text flexGrow={1}>Option 2</Text>
        <ListView.OptionCell>
          <Button onClick={console.log}>Button</Button>
        </ListView.OptionCell>
      </ListView.Option>
    </ListView>
  );
}

export default App;
