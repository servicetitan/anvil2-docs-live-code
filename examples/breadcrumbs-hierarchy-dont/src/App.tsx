import { Breadcrumbs } from "@servicetitan/anvil2";

function App() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Link href="/web/components/buttons">Button</Breadcrumbs.Link>
      <Breadcrumbs.Link href="/web/patterns/forms">Forms</Breadcrumbs.Link>
      <Breadcrumbs.Link href="/web/components/breadcrumbs">
        Breadcrumbs
      </Breadcrumbs.Link>
    </Breadcrumbs>
  );
}

export default App;
