import { Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div
      style={{
        padding: "var(--size-2)",
        backgroundColor: "var(--background-color-strongest)",
      }}
    >
      <Text subdued>My contrast is 3.27:1, below AA level requirement</Text>
    </div>
  );
}
export default App;
