import { SideNav } from "@servicetitan/anvil2";

function App() {
  return (
    <SideNav>
      <SideNav.Link id="1" active>
        Selected Rest
      </SideNav.Link>
      <SideNav.Link id="1" data-interactive="hover" active>
        Selected Hover
      </SideNav.Link>
      <SideNav.Link id="1" data-interactive="active" active>
        Selected Active
      </SideNav.Link>
      <SideNav.Link id="1" data-interactive="focus-visible" active>
        Selected Focus Visible
      </SideNav.Link>
      <SideNav.Link id="1" disabled active>
        Selected Disabled
      </SideNav.Link>
    </SideNav>
  );
}

export default App;
