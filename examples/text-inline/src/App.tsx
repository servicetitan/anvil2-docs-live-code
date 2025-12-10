import { Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Text size="medium" variant="body">
      The outer text is in a <code>p</code> element, but the{" "}
      <Text variant="body" inline style={{ fontWeight: 700 }}>
        inner text
      </Text>{" "}
      is in a <code>span</code> element.
    </Text>
  );
}

export default App;
