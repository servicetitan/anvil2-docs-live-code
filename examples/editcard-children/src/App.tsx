import {
  EditCard,
  Flex,
  Text,
  Grid,
  TextField,
  Radio,
  RadioGroup,
} from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={6}>
      <EditCard headerText="Edit Card" state="not started" />
      <EditCard headerText="Edit Card" state="not started">
        <Flex gap={8} grow={1} wrap="wrap" style={{ width: "500px" }}>
          <Flex direction="column" gap={1} basis="200px" shrink="0" grow="1">
            <Text variant="eyebrow" size="medium">
              Name
            </Text>
            <Text size="medium">Jane Doe</Text>
          </Flex>
          <Flex direction="column" gap={1} basis="200px" shrink="0" grow="1">
            <Text variant="eyebrow" size="medium">
              Notification Frequency
            </Text>
            <Text size="medium">Weekly</Text>
          </Flex>
        </Flex>
      </EditCard>
      <EditCard headerText="Edit Card" state="in progress">
        <Grid gap="6">
          <TextField label="Name" />
          <RadioGroup legend="Notification Frequency">
            <Radio name="ex1" value="daily" label="Daily" />
            <Radio name="ex1" value="weekly" label="Weekly" defaultChecked />
            <Radio name="ex1" value="monthly" label="Monthly" />
          </RadioGroup>
        </Grid>
      </EditCard>
    </Flex>
  );
}

export default App;
