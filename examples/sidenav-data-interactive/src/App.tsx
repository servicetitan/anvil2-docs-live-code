import { SideNav } from "@servicetitan/anvil2";

function App() {
  return (
    <SideNav>
      <SideNav.Link id="1">Rest</SideNav.Link>
      <SideNav.Link id="1" data-interactive="hover">
        Hover
      </SideNav.Link>
      <SideNav.Link id="1" data-interactive="active">
        Active
      </SideNav.Link>
      <SideNav.Link id="1" data-interactive="focus-visible">
        Focus Visible
      </SideNav.Link>
      <SideNav.Link id="1" disabled>
        Disabled
      </SideNav.Link>
    </SideNav>
  );
}

export default App;
