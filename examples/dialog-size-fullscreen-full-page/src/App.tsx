import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Dialog open fullScreen>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>
          Body text in the Dialog. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc nibh sem, ornare sit amet ultrices ac, malesuada
          ac nisi.
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
