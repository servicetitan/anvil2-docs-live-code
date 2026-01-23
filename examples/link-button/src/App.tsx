import { LinkButton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={4} justifyContent="space-around">
      <LinkButton>Primary Link Button</LinkButton>
      <LinkButton appearance="secondary">Secondary Link Button</LinkButton>
      <LinkButton ghost>Quiet Link Button</LinkButton>
    </Flex>
  );
}

export default App;
