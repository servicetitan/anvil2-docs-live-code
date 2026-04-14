import { Checkbox, Flex, Switch, Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" alignItems="stretch">
      <Textarea
        label="Visit summary (AI draft)"
        labelProps={{ aiMark: true }}
        value="No cooling upstairs, filter overdue."
      />
      <Checkbox.Group
        legend="Suggested add-ons for this job"
        legendProps={{ aiMark: true }}
      >
        <Checkbox label="Surge protector install" checked />
        <Checkbox label="Duct sanitizing" checked />
      </Checkbox.Group>
      <Switch label="Suggest parts from similar jobs" labelAiMark />
    </Flex>
  );
}

export default App;
