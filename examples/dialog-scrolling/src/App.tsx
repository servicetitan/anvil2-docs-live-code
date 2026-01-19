import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "37rem" }}>
      <Dialog open>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet est eget est dapibus molestie. Phasellus ornare egestas turpis,
          sit amet auctor ligula pharetra non. Duis et tellus vel lacus
          pellentesque semper. Integer tempor, sapien maximus auctor
          pellentesque, felis nibh vehicula justo, ut consequat mauris sem a
          justo. Donec rutrum, velit bibendum condimentum ornare, eros justo
          sagittis metus, eget blandit sapien lectus eget lacus. Proin non arcu
          maximus, gravida odio et, faucibus turpis. Nam venenatis, elit at
          ultricies aliquet, nunc mi bibendum risus, et maximus tellus purus a
          eros. Aliquam vitae pulvinar velit, a accumsan magna. Maecenas aliquet
          varius augue, vitae fermentum magna suscipit et. Curabitur fringilla
          arcu sit amet lorem porttitor, vel mattis ligula dapibus. Vivamus et
          ornare quam. Curabitur sapien odio, interdum quis erat facilisis,
          convallis congue tellus. Nulla dui sem, mattis eu ornare quis,
          tristique a leo. Vivamus ac magna turpis. Vivamus tempus, metus ut
          aliquam rhoncus, leo sem lobortis arcu, sed lobortis justo mi varius
          turpis. Integer volutpat metus non elit tincidunt accumsan sed a erat.
          Proin dapibus, lectus et tempor laoreet, odio massa ullamcorper velit,
          nec luctus nisi sem at sem. Aliquam erat volutpat. Quisque egestas
          interdum urna. Vivamus ac lacus felis. Donec justo ex, convallis sit
          amet justo et, condimentum lacinia dolor. Fusce consequat iaculis
          metus eu iaculis. Duis consectetur leo id tortor luctus, quis lobortis
          lectus varius. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Praesent vitae consectetur mi.
        </Dialog.Content>
        <Dialog.Footer sticky>
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
