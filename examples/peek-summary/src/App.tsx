import {
  Popover,
  Flex,
  Avatar,
  Text,
  Toolbar,
  Divider,
} from "@servicetitan/anvil2";
import Mail from "@servicetitan/anvil2/assets/icons/material/round/mail.svg";
import Chat from "@servicetitan/anvil2/assets/icons/material/round/chat.svg";
import Phone from "@servicetitan/anvil2/assets/icons/material/round/phone.svg";
import Event from "@servicetitan/anvil2/assets/icons/material/round/event.svg";
import History from "@servicetitan/anvil2/assets/icons/material/round/history.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "8rem",
        paddingInline: "5rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Jane Doe</Popover.Button>
        <Popover.Content>
          <Flex gap="3">
            <Avatar name="Dog01" size="large" />
            <Flex direction="column">
              <Text>
                <b>Jane Doe</b>
              </Text>
              <Text subdued size="small">
                Customer since 2018
              </Text>
            </Flex>
          </Flex>
          <Toolbar
            associatedContent="playground toolbar"
            additionalItems={[
              <Toolbar.Button
                key="settings"
                onClick={() => console.log("Settings clicked")}
              >
                Settings
              </Toolbar.Button>,
              <Toolbar.Button
                key="help"
                onClick={() => console.log("Help clicked")}
              >
                Help
              </Toolbar.Button>,
            ]}
            overflow="collapse"
          >
            <Toolbar.Button
              icon={Mail}
              onClick={() => console.log("Email clicked")}
              aria-label="Email"
            />
            <Toolbar.Button
              icon={Chat}
              onClick={() => console.log("Chat clicked")}
              aria-label="Chat"
            />
            <Toolbar.Button
              icon={Phone}
              onClick={() => console.log("Call clicked")}
              aria-label="Call"
            />
            <Flex grow="1" style={{ height: "25px" }}>
              <Divider vertical />
            </Flex>
            <Toolbar.Button
              icon={Event}
              onClick={() => console.log("Schedule event clicked")}
              aria-label="Schedule event"
            />
            <Toolbar.Button
              icon={History}
              onClick={() => console.log("Jobs list clicked")}
              aria-label="Jobs list"
            />
            <Flex grow="1" style={{ height: "25px" }}>
              <Divider vertical />
            </Flex>
          </Toolbar>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
