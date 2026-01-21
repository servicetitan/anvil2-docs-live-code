import { Popover, Flex, Avatar, Text, Toolbar } from "@servicetitan/anvil2";
import Phone from "@servicetitan/anvil2/assets/icons/material/round/phone.svg";
import Mail from "@servicetitan/anvil2/assets/icons/material/round/mail.svg";
import Location from "@servicetitan/anvil2/assets/icons/material/round/location_on.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "12rem",
        paddingInline: "5.5rem",
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
            overflow="collapse"
            direction="vertical"
          >
            <Toolbar.Button
              icon={Phone}
              onClick={() => console.log("Call clicked")}
              aria-label="Call"
              justifyContent="start"
            >
              +1 (555) 555-5555
            </Toolbar.Button>
            <Toolbar.Button
              icon={Mail}
              onClick={() => console.log("Email clicked")}
              aria-label="Email"
              justifyContent="start"
            >
              janedoe@servicetitan.com
            </Toolbar.Button>
            <Toolbar.Button
              icon={Location}
              onClick={() => console.log("Address clicked")}
              aria-label="Address"
              justifyContent="start"
            >
              123 Main Street Glendale CA 91203
            </Toolbar.Button>
          </Toolbar>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
