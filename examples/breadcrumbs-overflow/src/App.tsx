import { Breadcrumbs, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column" alignItems="baseline">
      <Breadcrumbs>
        <Breadcrumbs.Link href="#">Item 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 2</Breadcrumbs.Link>
      </Breadcrumbs>

      <Breadcrumbs>
        <Breadcrumbs.Link href="#">Item 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 4</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 5</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 6</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 7</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 8</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 9</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 10</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 11</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Item 12</Breadcrumbs.Link>
      </Breadcrumbs>
    </Flex>
  );
}

export default App;
