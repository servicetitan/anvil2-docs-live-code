import { Link, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "28rem" }}>
      <Text
        text={
          <>
            Review the <Link text="account settings" href="/settings" /> before
            continuing.
          </>
        }
      />
    </div>
  );
}

export default App;
