import { Breadcrumbs } from "@servicetitan/anvil2";

function App() {
  return (
    <Breadcrumbs style={{ maxWidth: "30rem" }}>
      <Breadcrumbs.Link href="#">Item 1</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">Longer Item</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">
        This is a very long item to show what happens when one individual
        Breadcrumb item is incredibly long for some reason
      </Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">Item 4</Breadcrumbs.Link>
      <Breadcrumbs.Link href="#">Item 5</Breadcrumbs.Link>
    </Breadcrumbs>
  );
}

export default App;
