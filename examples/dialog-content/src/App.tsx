import {
  Dialog,
  Grid,
  Text,
  TextField,
  Radio,
  Flex,
  Button,
} from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "37rem" }}>
      <Dialog open>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>
          <Grid gap="6" flexGrow="1">
            <Text>
              Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac,
              malesuada ac nisi.
            </Text>

            <TextField label="Label" />
            <TextField label="Label" />

            <Radio.Group legend="Radio group header">
              <Radio name="role" value="designer" label="Apple" />
              <Radio name="role" value="developer" label="Banana" />
              <Radio name="role" value="pm" label="Carrot" />
            </Radio.Group>
          </Grid>
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Primary Action</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
