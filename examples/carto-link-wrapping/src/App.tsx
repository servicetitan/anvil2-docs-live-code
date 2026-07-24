import { Link } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "12rem" }}>
      <Link
        text="A long link label that wraps across more than one line inside its container"
        href="/dashboard"
      />
    </div>
  );
}

export default App;
