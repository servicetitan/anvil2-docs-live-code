import { Badge, Link } from "@servicetitan/anvil2";

function App() {
  return (
    <Link href="#" style={{ position: "relative" }}>
      What&apos;s new?
      <Badge aria-label="with 12 updates">12</Badge>
    </Link>
  );
}

export default App;
