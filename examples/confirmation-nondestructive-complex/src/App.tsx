import { Dialog, Flex, Button, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "23.5rem" }}>
      <Dialog open>
        <Dialog.Header>[Action][Item]</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="2" style={{ width: "100%" }}>
            <Flex
              justifyContent="center"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                padding: "2rem",
              }}
            >
              <Text variant="eyebrow" size="small">
                image, table, banner, etc.
              </Text>
            </Flex>
            <Text variant="body" size="medium">
              Description
              <ul style={{ marginTop: "0" }}>
                <li>Description...</li>
                <li>Description...</li>
                <li>Description...</li>
              </ul>
            </Text>
          </Flex>
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">[Action][Item]</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
