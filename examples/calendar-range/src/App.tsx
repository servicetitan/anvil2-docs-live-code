import { Calendar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Calendar
        range
        defaultValue={{
          start: new Date().toISOString(),
          end: new Date(
            new Date().setDate(new Date().getDate() + 5),
          ).toISOString(),
        }}
      />
    </Flex>
  );
}

export default App;
