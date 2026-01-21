import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <FieldLabel
        htmlFor="password"
        required
        moreInfo="Password must be at least 8 characters and include a number."
      >
        Password
      </FieldLabel>
      <input id="password" type="password" required />
    </Flex>
  );
}

export default App;
