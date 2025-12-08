import { Badge, Link } from "@servicetitan/anvil2";

function App() {
  return (
    <Link href="#" style={{ position: "relative" }}>
      What&apos;s new?
      <Badge
        aria-label="with 12 updates"
        offset={{
          x: "1rem", // 16px to the right
          y: "-0.25rem", // 4px up
        }}
      >
        12
      </Badge>
    </Link>
  );
}

export default App;
