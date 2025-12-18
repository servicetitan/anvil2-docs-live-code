import { Popover, Flex, Grid } from "@servicetitan/anvil2";

function App() {
  const btnShared = { style: { width: "100%" }, size: "small" as const };

  return (
    <div>
      <Flex justifyContent="center" style={{ margin: "6rem 8rem" }}>
        <Grid templateColumns="repeat(3, 7rem)" gap="2">
          <Popover placement="top-start" defaultOpen>
            <Popover.Button {...btnShared}>top-start</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="top" defaultOpen>
            <Popover.Button {...btnShared}>top</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="top-end" defaultOpen>
            <Popover.Button {...btnShared}>top-end</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="left-start" defaultOpen>
            <Popover.Button {...btnShared}>left-start</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <div />
          <Popover placement="right-start" defaultOpen>
            <Popover.Button {...btnShared}>right-start</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="left" defaultOpen>
            <Popover.Button {...btnShared}>left</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <div />
          <Popover placement="right" defaultOpen>
            <Popover.Button {...btnShared}>right</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="left-end" defaultOpen>
            <Popover.Button {...btnShared}>left-end</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <div />
          <Popover placement="right-end" defaultOpen>
            <Popover.Button {...btnShared}>right-end</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="bottom-start" defaultOpen>
            <Popover.Button {...btnShared}>bottom-start</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="bottom" defaultOpen>
            <Popover.Button {...btnShared}>bottom</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
          <Popover placement="bottom-end" defaultOpen>
            <Popover.Button {...btnShared}>bottom-end</Popover.Button>
            <Popover.Content>Content</Popover.Content>
          </Popover>
        </Grid>
      </Flex>
    </div>
  );
}

export default App;
