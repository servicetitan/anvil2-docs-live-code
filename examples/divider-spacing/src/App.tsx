import { Divider, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Divider spacing="0">
        <code>&quot;0&quot;</code>
      </Divider>
      <Divider spacing="half" style={{ background: "var(--color-orange-100)" }}>
        <code>&quot;half&quot;</code>
      </Divider>
      <Divider spacing="1" style={{ background: "var(--color-purple-100)" }}>
        <code>&quot;1&quot;</code>
      </Divider>
      <Divider spacing="2" style={{ background: "var(--color-orange-100)" }}>
        <code>&quot;2&quot;</code>
      </Divider>
      <Divider spacing="3" style={{ background: "var(--color-purple-100)" }}>
        <code>&quot;3&quot;</code>
      </Divider>
      <Divider spacing="4" style={{ background: "var(--color-orange-100)" }}>
        <code>&quot;4&quot;</code>
      </Divider>
      <Divider spacing="5" style={{ background: "var(--color-purple-100)" }}>
        <code>&quot;5&quot;</code>
      </Divider>
    </Flex>
  );
}

export default App;
