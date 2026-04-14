import { Flex, Text, Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Textarea
      label="Technician notes"
      labelProps={{
        aiMark: {
          type: "popover",
          content: (
            <Flex
              direction="column"
              gap="2"
              style={{ padding: "12px", maxWidth: "300px" }}
            >
              <Text variant="headline" el="h5" size="small">
                About AI-assisted notes
              </Text>
              <Text>
                Suggestions pull from past jobs, equipment models, and your
                team’s common fixes. Edit anything before it’s shared with the
                customer.
              </Text>
            </Flex>
          ),
          triggerLabel: "Learn how AI assists technician notes",
        },
      }}
      value="Follow-up on thermostat calibration…"
    />
  );
}

export default App;
