import { SideNav } from "@servicetitan/anvil2";

function App() {
  return (
    <SideNav aria-label="Page Name">
      <SideNav.Link id="home">Home</SideNav.Link>
      <SideNav.Link id="dashboard">Dashboard</SideNav.Link>
      <SideNav.Group label="Reports">
        <SideNav.Link id="reports-all">All</SideNav.Link>
        <SideNav.Link id="reports-custom">Custom</SideNav.Link>
      </SideNav.Group>
      <SideNav.Collapsible label="Settings">
        <SideNav.Link id="settings-global">Global Settings</SideNav.Link>
        <SideNav.Link id="settings-user" active>
          User Preferences
        </SideNav.Link>
      </SideNav.Collapsible>
    </SideNav>
  );
}

export default App;
