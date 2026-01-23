import { FieldLabel, FieldMessage, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <FieldLabel htmlFor="password" required>
        Password
      </FieldLabel>
      <input
        id="password"
        type="password"
        required
        aria-describedby="password-hint"
      />
      <FieldMessage
        id="password-hint"
        hint="Must be at least 8 characters and include a number."
      />
    </Flex>
  );
}

export default App;
