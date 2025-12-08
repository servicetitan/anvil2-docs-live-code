import { Breadcrumbs } from "@servicetitan/anvil2";

function App() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
      <Breadcrumbs.Link>Sub Page</Breadcrumbs.Link>
      <Breadcrumbs.Link>Current Page</Breadcrumbs.Link>
    </Breadcrumbs>
  );
}

export default App;
