import { Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Textarea
      label="Label"
      defaultValue={
        "Row text 1" +
        "\n" +
        "Row text 2" +
        "\n" +
        "Row text 3" +
        "\n" +
        "Row text 4" +
        "\n" +
        "Row text 5"
      }
      rows={3}
    />
  );
}

export default App;
