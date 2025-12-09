import { Link, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="space-around">
      <Link>Primary Link</Link>
      <Link target="_blank">External Link</Link>
      <Link appearance="secondary">Secondary Link</Link>
      <Link quiet>Quiet Link</Link>
    </Flex>
  );
}

export default App;
