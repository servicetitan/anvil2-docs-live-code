import { Calendar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Calendar defaultValue="2024-07-07" defaultFocusedDate="2024-06-06" />
    </Flex>
  );
}

export default App;
