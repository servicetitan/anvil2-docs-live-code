import { Avatar, Flex } from "@servicetitan/anvil2";
import dog01 from "../assets/dog-01.png";
import dog02 from "../assets/dog-02.png";

function App() {
  return (
    <Flex gap="6" justifyContent="center">
      <Avatar image={dog01} name="Dog01" />
      <Avatar image={dog02} name="Dog02" />
    </Flex>
  );
}

export default App;
