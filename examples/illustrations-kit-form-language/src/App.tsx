import {
  AnvilProvider,
  Flex,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import FirstUseLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-light.svg";
import FirstUseDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-dark.svg";
import ErrorStateLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-light.svg";
import ErrorStateDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-dark.svg";
import SuccessLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-light.svg";
import SuccessDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-dark.svg";
import UserClearedLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-light.svg";
import UserClearedDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-dark.svg";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();

  const FirstUse = mode === "dark" ? FirstUseDark : FirstUseLight;
  const ErrorState = mode === "dark" ? ErrorStateDark : ErrorStateLight;
  const Success = mode === "dark" ? SuccessDark : SuccessLight;
  const UserCleared = mode === "dark" ? UserClearedDark : UserClearedLight;
  const NoSearchResults =
    mode === "dark" ? NoSearchResultsDark : NoSearchResultsLight;

  return (
    <AnvilProvider themeData={{ mode }}>
      <Flex gap={4} wrap="wrap">
        <FirstUse aria-hidden="true" width={167} height={140} />
        <ErrorState aria-hidden="true" width={167} height={140} />
        <Success aria-hidden="true" width={167} height={140} />
        <UserCleared aria-hidden="true" width={167} height={140} />
        <NoSearchResults aria-hidden="true" width={167} height={140} />
      </Flex>
    </AnvilProvider>
  );
}

export default App;
