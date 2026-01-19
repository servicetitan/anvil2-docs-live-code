import { ListView, Flex, Menu } from "@servicetitan/anvil2";
import MenuIcon from "@servicetitan/anvil2/assets/icons/material/round/menu.svg";

function App() {
  return (
    <ListView>
      <ListView.Option label="Luke Skywalker">
        <Flex direction="column" grow="1">
          Luke Skywalker
        </Flex>
        <ListView.OptionCell>
          <Menu icon={MenuIcon} aria-label="menu">
            <Menu.Item label="Edit" onClick={() => console.log("Edit")} />
            <Menu.Item label="Delete" onClick={() => console.log("Delete")} />
          </Menu>
        </ListView.OptionCell>
      </ListView.Option>
      <ListView.Option label="Obi-wan Kenobi">
        <Flex direction="column" grow="1">
          Obi-wan Kenobi
        </Flex>
        <ListView.OptionCell>
          <Menu icon={MenuIcon} aria-label="menu">
            <Menu.Item label="Edit" onClick={() => console.log("Edit")} />
            <Menu.Item label="Delete" onClick={() => console.log("Delete")} />
          </Menu>
        </ListView.OptionCell>
      </ListView.Option>
      <ListView.Option label="Din Djarin">
        <Flex direction="column" grow="1">
          Din Djarin
        </Flex>
        <ListView.OptionCell>
          <Menu icon={MenuIcon} aria-label="menu">
            <Menu.Item label="Edit" onClick={() => console.log("Edit")} />
            <Menu.Item label="Delete" onClick={() => console.log("Delete")} />
          </Menu>
        </ListView.OptionCell>
      </ListView.Option>
    </ListView>
  );
}

export default App;
