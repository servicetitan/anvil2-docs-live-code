import { ButtonToggle, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="4">
        <ButtonToggle size="medium">Sun</ButtonToggle>
        <ButtonToggle size="medium">Mon</ButtonToggle>
        <ButtonToggle size="medium">Tue</ButtonToggle>
        <ButtonToggle size="medium">Wed</ButtonToggle>
        <ButtonToggle size="medium">Thu</ButtonToggle>
        <ButtonToggle size="medium">Fri</ButtonToggle>
        <ButtonToggle size="medium">Sat</ButtonToggle>
      </Flex>

      <Flex gap="4">
        <ButtonToggle size="medium">Sunday</ButtonToggle>
        <ButtonToggle size="medium">Monday</ButtonToggle>
        <ButtonToggle size="medium">Tuesday</ButtonToggle>
        <ButtonToggle size="medium">Wednesday</ButtonToggle>
        <ButtonToggle size="medium">Thursday</ButtonToggle>
        <ButtonToggle size="medium">Friday</ButtonToggle>
        <ButtonToggle size="medium">Saturday</ButtonToggle>
      </Flex>
    </Flex>
  );
}

export default App;
