import { AnvilProvider, usePrefersColorScheme } from "@servicetitan/anvil2";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();

  const NoSearchResults =
    mode === "dark" ? NoSearchResultsDark : NoSearchResultsLight;

  return (
    <AnvilProvider themeData={{ mode }}>
      <NoSearchResults aria-hidden="true" width={167} height={140} />
    </AnvilProvider>
  );
}

export default App;
