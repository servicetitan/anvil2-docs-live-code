import { Calendar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" direction="column">
      <Calendar
        focusedDate="2024-06-01"
        unavailable={{
          dates: [
            "2024-06-02",
            "2024-06-04",
            "2024-06-06",
            "2024-06-08",
            "2024-06-10",
          ],
        }}
      />
    </Flex>
  );
}

export default App;
