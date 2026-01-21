import { Grid, Flex, TextField, Radio, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(2, max-content)" gap="8">
      <Flex direction="column" gap="8">
        <TextField label="Label" placeholder="Placeholder" />
        <Radio name="fruit" value="Apple" label="Apple" />
        <Button appearance="primary">Button</Button>
        <Button>Button</Button>
        <Button appearance="danger-secondary">Button</Button>
        <Button appearance="danger">Button</Button>
        <Button appearance="ghost">Button</Button>
      </Flex>
      <Flex direction="column" gap="8">
        <TextField label="Label" placeholder="Placeholder" disabled />
        <Radio name="fruit" value="Apple" label="Apple" disabled />
        <Button appearance="primary" disabled>
          Button
        </Button>
        <Button disabled>Button</Button>
        <Button appearance="danger-secondary" disabled>
          Button
        </Button>
        <Button appearance="danger" disabled>
          Button
        </Button>
        <Button appearance="ghost" disabled>
          Button
        </Button>
      </Flex>
    </Grid>
  );
}

export default App;
