import { Dialog, Flex, Button, Alert, Link, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "35.5rem", minHeight: "30rem" }}>
      <Dialog enableScrollChaining open size="large">
        <Dialog.Header>Enable Autopilot?</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="3">
            <Alert title="Note" status="warning" onClose={console.log}>
              If a 3rd party manages your digital ads, this will make changes to
              the bid strategy and could create confusion.{" "}
              <Link>Learn more</Link>
            </Alert>
            <Text>
              By enabling Autopilot, ServiceTitan will optimize your
              campaign&apos;s bid strategy to achieve the highest ROI. Please
              Click on “Enable Autopilot” if you wish to have ServiceTitan to
              run Autopilot.
            </Text>
            <Flex direction="column">
              <Text variant="eyebrow" size="small">
                Campaign
              </Text>
              <Text variant="headline" size="small" el="h4">
                Aging Equipment Memorial Day
              </Text>
              <Flex gap="3">
                <Text>Google Ads</Text>
                <Text>CPC</Text>
              </Flex>
            </Flex>
          </Flex>
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Enable Autopilot</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
