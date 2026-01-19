import { Breadcrumbs, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column" alignItems="baseline">
      <Breadcrumbs>
        <Breadcrumbs.Link href="#">Default Breadcrumb</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Current Page</Breadcrumbs.Link>
      </Breadcrumbs>

      <Breadcrumbs>
        <Breadcrumbs.Link href="#" data-interactive="hover">
          Hover Breadcrumb
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Current Page</Breadcrumbs.Link>
      </Breadcrumbs>

      <Breadcrumbs>
        <Breadcrumbs.Link href="#" data-interactive="active">
          Active Breadcrumb
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Current Page</Breadcrumbs.Link>
      </Breadcrumbs>

      <Breadcrumbs>
        <Breadcrumbs.Link href="#" data-interactive="focus-visible">
          Focus Visible Breadcrumb
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Current Page</Breadcrumbs.Link>
      </Breadcrumbs>
    </Flex>
  );
}

export default App;
