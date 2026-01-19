import { Breadcrumbs } from "@servicetitan/anvil2";

function App() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Link href="#">Item 1</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">Item 2</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">Current page</Breadcrumbs.Link>
    </Breadcrumbs>
  );
}

export default App;
