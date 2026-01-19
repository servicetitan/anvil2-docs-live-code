import { ListView, Avatar } from "@servicetitan/anvil2";

function App() {
  return (
    <ListView onSelectionChange={console.log}>
      <ListView.Option label="Luke Skywalker">
        <Avatar name="Luke Skywalker" />
        Luke Skywalker
      </ListView.Option>
      <ListView.Option label="Obi-wan Kenobi">
        <Avatar name="Obi-wan Kenobi" />
        Obi-wan Kenobi
      </ListView.Option>
      <ListView.Option label="Din Djarin">
        <Avatar name="Din Djarin" />
        Din Djarin
      </ListView.Option>
    </ListView>
  );
}

export default App;
