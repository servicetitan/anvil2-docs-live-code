import { TextField, Text, Link } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <TextField
      label="Office Phone"
      description={
        <Text size="small" subdued>
          This is the number customers see when a call is made.{" "}
          <Link
            style={{ marginTop: core.primitive?.Size1?.value }}
            appearance="secondary"
          >
            Learn more
          </Link>
        </Text>
      }
    />
  );
}

export default App;
