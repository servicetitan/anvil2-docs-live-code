import { Breadcrumbs } from "@servicetitan/anvil2";

function App() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Link href="/web">Web</Breadcrumbs.Link>
      <Breadcrumbs.Link href="/web/components">Components</Breadcrumbs.Link>
      <Breadcrumbs.Link href="/web/components/breadcrumbs">
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs>
  );
}

export default App;
