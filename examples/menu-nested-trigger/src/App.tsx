import {
  Menu,
  ButtonCompound,
  Flex,
  Avatar,
  Text,
  Divider,
  Icon,
} from "@servicetitan/anvil2";
import Next from "@servicetitan/anvil2/assets/icons/material/round/navigate_next.svg";

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
        <Menu
          trigger={({ ref, ...rest }) => (
            <button type="button" {...rest} ref={ref}>
              <Flex direction="column" gap="2">
                <Text>Add to Group</Text>
                <Text size="small" color="subdued">
                  Organize this contact
                </Text>
              </Flex>
              <div style={{ flexGrow: 1 }} />
              <Icon aria-hidden svg={Next} />
            </button>
          )}
        >
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
