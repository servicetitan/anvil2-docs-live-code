import {
  AnvilProvider,
  Flex,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import {
  EmptyStateFirstUse,
  EmptyStateNoSearchResults,
  EmptyStateSuccess,
} from "@servicetitan/anvil2-illustrations";

function App() {
  const { mode } = usePrefersColorScheme();

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex gap={4} wrap="wrap">
        <EmptyStateFirstUse aria-hidden="true" width={167} height={140} />
        <EmptyStateSuccess aria-hidden="true" width={167} height={140} />
        <EmptyStateNoSearchResults
          aria-hidden="true"
          width={167}
          height={140}
        />
      </Flex>
    </AnvilProvider>
  );
}

export default App;
