import { SideNav } from "@servicetitan/anvil2";

function App() {
  return (
    <SideNav aria-label="Side Nav Title" style={{ height: 260 }}>
      <SideNav.Link id="item-1">Item 1</SideNav.Link>
      <SideNav.Link id="item-2">Item 2</SideNav.Link>
      <SideNav.Collapsible label="Item 3">
        <SideNav.Link id="item-3-1">Item 3-1</SideNav.Link>
        <SideNav.Link id="item-3-2">Item 3-2</SideNav.Link>
      </SideNav.Collapsible>
      <SideNav.Collapsible label="Item 4">
        <SideNav.Link id="item-4-1" active>
          Item 4-1
        </SideNav.Link>
        <SideNav.Link id="item-4-2">Item 4-2</SideNav.Link>
      </SideNav.Collapsible>
    </SideNav>
  );
}

export default App;
