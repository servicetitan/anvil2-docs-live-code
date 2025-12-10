import {
  Menu,
  ButtonCompound,
  Flex,
  Avatar,
  Text,
  Divider,
} from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Menu
        trigger={(props) => (
          <ButtonCompound {...props}>
            <Flex gap="4" alignItems="center">
              <Avatar name="Jon Snow" size="large" />
              <Text size="large">Jon Snow</Text>
            </Flex>
          </ButtonCompound>
        )}
      >
        <Menu label="Add to Group">
          <Menu.Item label="Customers" />
          <Menu.Item label="Technicians" />
          <Menu.Item label="Office Employees" />
          <Divider spacing="half" />
          <Menu.Item label="New Group" />
        </Menu>
        <Menu.Item label="Edit Contact" />
        <Divider spacing="half" />
        <Menu.Item label="Delete" />
      </Menu>
    </div>
  );
}

export default App;
