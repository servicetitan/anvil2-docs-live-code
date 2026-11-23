import { AnvilProvider, usePrefersColorScheme } from "@servicetitan/anvil2";
import { EmptyStateContentLocked } from "@servicetitan/anvil2-illustrations";

function App() {
  const { mode } = usePrefersColorScheme();

  return (
    <AnvilProvider themeData={{ mode }}>
      <EmptyStateContentLocked
        aria-hidden="true"
        style={{ width: 180, height: "auto" }}
      />
    </AnvilProvider>
  );
}

export default App;
