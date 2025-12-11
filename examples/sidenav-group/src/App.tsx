import { SideNav } from "@servicetitan/anvil2";

function App() {
  return (
    <SideNav aria-label="Side Nav Title">
      <SideNav.Group label="Group 1">
        <SideNav.Link active id="g-1-1">
          Item 1-1
        </SideNav.Link>
        <SideNav.Link id="g-1-2">Item 1-2</SideNav.Link>
      </SideNav.Group>
      <SideNav.Group label="Group 3">
        <SideNav.Link id="g-2-1">Item 2-1</SideNav.Link>
        <SideNav.Link id="g-2-2">Item 2-2</SideNav.Link>
      </SideNav.Group>
    </SideNav>
  );
}

export default App;
