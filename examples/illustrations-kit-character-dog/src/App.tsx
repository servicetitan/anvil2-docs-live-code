import { AnvilProvider, usePrefersColorScheme } from "@servicetitan/anvil2";
import { EmptyStateNoSearchResults } from "@servicetitan/anvil2-illustrations";

function App() {
  const { mode } = usePrefersColorScheme();

  return (
    <AnvilProvider themeData={{ mode }}>
      <EmptyStateNoSearchResults aria-hidden="true" width={167} height={140} />
    </AnvilProvider>
  );
}

export default App;
