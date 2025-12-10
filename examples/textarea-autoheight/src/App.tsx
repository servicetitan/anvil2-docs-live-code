import { Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Textarea
      autoHeight
      minRows={2}
      maxRows={4}
      disableResize
      label="Send a message"
    />
  );
}

export default App;
