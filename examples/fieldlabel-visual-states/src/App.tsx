import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <FieldLabel htmlFor="email">Email Address</FieldLabel>
        <input id="email" type="email" />
      </Flex>

      <Flex direction="column" gap="2">
        <FieldLabel htmlFor="name" required>
          Full Name
        </FieldLabel>
        <input id="name" type="text" required />
      </Flex>

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
    </Flex>
  );
}

export default App;
