import { ListView, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "23rem" }}>
      <ListView onSelectionChange={console.log} defaultSelected={["Option2"]}>
        <ListView.Option label="Option">
          <Text flexGrow={1}>
            Here is an example of how overflow is handled for ListView.
          </Text>
        </ListView.Option>
        <ListView.Option label="Option2">
          <Text flexGrow={1}>
            Here is another example of how overflow is handled for ListView.
          </Text>
          <ListView.OptionCell></ListView.OptionCell>
        </ListView.Option>
      </ListView>
    </div>
  );
}

export default App;
