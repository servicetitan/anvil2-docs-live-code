import { Radio, RadioGroup, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <RadioGroup
      legend={
        <Flex direction="column" gap="0">
          <Text variant="headline" el="h3" size="small">
            Assign geofence tracking to vehicles
          </Text>
          <Text>
            A geofence can be applied to a selection of individual vehicles or
            assigned to one or more vehicle groups.
          </Text>
        </Flex>
      }
    >
      <Radio
        name="c1"
        value="a"
        label="Apply to individual vehicles"
        defaultChecked
      />
      <Radio name="c1" value="b" label="Apply to vehicle groups" />
    </RadioGroup>
  );
}

export default App;
