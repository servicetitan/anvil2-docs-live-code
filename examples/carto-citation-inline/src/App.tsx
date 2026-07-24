import { Citation, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "28rem" }}>
      <Text
        text={
          <>
            The customer's account is in good standing with no overdue balances{" "}
            <Citation href="https://example.com" text="Source" />.
          </>
        }
      />
    </div>
  );
}

export default App;
