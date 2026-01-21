import { Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Text>
      In a paragraph of text, when you have words that need to be deemphasized,{" "}
      <Text inline subdued>
        subdued text
      </Text>{" "}
      becomes less apparent
    </Text>
  );
}
export default App;
