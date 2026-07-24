import { Link } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Rest */}
      <Link text="Go to dashboard" href="/dashboard" />

      {/* Hover */}
      <Link text="Go to dashboard" href="/dashboard" data-interactive="hover" />

      {/* Focus */}
      <Link
        text="Go to dashboard"
        href="/dashboard"
        data-interactive="focus-visible"
      />
    </div>
  );
}

export default App;
