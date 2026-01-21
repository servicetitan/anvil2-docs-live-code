import { TextField, Text, Link } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Office Phone"
      description={
        <Text size="small" subdued>
          This is the number customers see when a call is made.{" "}
          <Link appearance="secondary">Learn more</Link>
        </Text>
      }
    />
  );
}

export default App;
