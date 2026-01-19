import { Drawer, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>Header text</Drawer.Header>
      <Drawer.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
        justo id eros interdum, quis malesuada diam malesuada. Etiam auctor
        pharetra nisl vitae aliquet. Curabitur gravida diam eros, nec pharetra
        augue convallis non. Maecenas nibh felis, blandit ac congue at, cursus
        sed odio. Cras quam risus, suscipit eget velit id, varius faucibus est.
        Integer in quam eget lacus consectetur posuere consectetur mollis quam.
        Morbi sapien felis, venenatis ac dui a, laoreet placerat velit. Nam
        luctus eu lectus sed consequat. Nam mi elit, auctor ut magna et,
        accumsan facilisis sapien.
        <br />
        <br />
        Donec a mi eu mauris dignissim dictum non at erat. Sed hendrerit metus
        dolor, in congue ligula vestibulum nec. Quisque ac velit sollicitudin,
        laoreet mauris quis, rutrum urna. Nam euismod nisi vitae mi commodo, id
        dapibus arcu convallis. Quisque tincidunt aliquam elit. Donec porttitor
        lacus eget tellus finibus, luctus dapibus mi auctor. Praesent sed
        tincidunt tortor. Aliquam non orci at nisl tincidunt dapibus. Mauris a
        interdum augue. Nunc ac augue ornare, mattis orci eu, tempus tortor. Ut
        dignissim velit sit amet lorem tempus, a dictum mi commodo.
        <br />
        <br />
        Maecenas neque nulla, fringilla vel risus sit amet, placerat accumsan
        tortor. Nam consequat massa non laoreet posuere. Cras at massa in leo
        varius tempus. Nam sed convallis sapien. Integer pretium risus vel
        fermentum consequat. Integer convallis in massa sit amet posuere. Cras
        gravida ut odio eget laoreet. Pellentesque lobortis enim nec orci
        venenatis, in auctor enim molestie. Nullam felis lectus, dictum ut magna
        vel, dignissim ultricies erat. Suspendisse potenti. Morbi non lacinia
        dui, at fermentum velit. Aenean sodales ullamcorper lectus, in mollis
        lacus vulputate vel. Vivamus accumsan lorem odio, et lacinia nunc
        rhoncus sed. Quisque dapibus nisl at orci sodales, vitae volutpat nulla
        tincidunt. Fusce tristique sed erat in ullamcorper. In porttitor lectus
        nec est porttitor, eget dignissim ex finibus.
        <br />
        <br />
        Nulla facilisi. Phasellus mollis iaculis nisi sed pulvinar. Ut id
        vehicula enim, eget euismod nibh. Vestibulum egestas facilisis mauris
        sit amet porttitor. Morbi at laoreet sem. Fusce eu mauris a dui
        efficitur tristique. Integer ultrices, leo nec bibendum sodales, neque
        sem congue ipsum, non molestie metus tortor ac ligula. Sed cursus diam
        sed odio cursus commodo eu nec ex. Donec sed lacus nec felis vehicula
        hendrerit. Curabitur consectetur ultricies odio eu suscipit.
        <br />
        <br />
        Cras eu blandit tortor, a semper nibh. Proin vel felis tellus.
        Vestibulum dignissim diam eget sem tincidunt, sit amet vehicula justo
        bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Phasellus tortor diam, viverra in mattis ac, lobortis id tellus.
        Praesent laoreet condimentum magna ac venenatis. Etiam massa libero,
        volutpat in erat a, venenatis varius lorem.
      </Drawer.Content>
      <Drawer.Footer sticky>
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="primary">Primary Action</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
