import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Dialog enableScrollChaining open fullScreen>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>
          Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac, malesuada
          ac nisi.
          <br />
          Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac, malesuada
          ac nisi.
          <br />
          Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac, malesuada
          ac nisi.
          <br />
          Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac, malesuada
          ac nisi.
        </Dialog.Content>
        <Dialog.Footer>
          <Button>Back</Button>
          {/* spacer */}
          <Flex grow="1" />
          <Dialog.CancelButton>Cancel</Dialog.CancelButton>
          <Button appearance="primary">Next</Button>
        </Dialog.Footer>
      </Dialog>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Discard unsaved changes?</Dialog.Header>
        <Dialog.Content>This cannot be undone.</Dialog.Content>
        <Dialog.Footer sticky>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Discard Changes</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
