import { Calendar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" direction="column">
      <Calendar
        focusedDate="2024-06-01"
        minDate="2024-06-05"
        maxDate="2024-06-20"
      />
    </Flex>
  );
}

export default App;
