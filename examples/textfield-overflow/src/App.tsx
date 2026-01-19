import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ maxWidth: "260px" }}>
      <TextField
        label="Label"
        defaultValue="This is an example of overflow text inside of a textfield to showcase what happens"
      />
    </div>
  );
}

export default App;
