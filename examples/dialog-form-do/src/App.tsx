import {
  Dialog,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "22rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>
          <Grid gap="6">
            <TextField label="Email Address" />

            <RadioGroup legend="Permissions">
              <Radio name="role" value="edit" label="Can view" checked />
              <Radio name="role" value="view" label="Can edit" />
            </RadioGroup>
          </Grid>
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Share</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
