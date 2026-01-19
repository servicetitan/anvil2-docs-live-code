import { SideNav, type SideNavLinkProps } from "@servicetitan/anvil2";
import { useState, type MouseEvent } from "react";

function App() {
  const [active, setActive] = useState("2");
  const handleOnClick = (
    _e: MouseEvent<HTMLAnchorElement>,
    id: SideNavLinkProps["id"],
  ) => {
    setActive(id);
  };

  return (
    <SideNav style={{ maxWidth: "200px" }} aria-label="Side Nav Title">
      <SideNav.Group label="Group item that will wrap when not enough space is available">
        <SideNav.Collapsible
          defaultExpanded
          label="Parent item that will wrap when not enough space is available"
        >
          <SideNav.Link id="7" onClick={handleOnClick} active={active === "1"}>
            Child Item 1
          </SideNav.Link>
          <SideNav.Link id="8" onClick={handleOnClick} active={active === "2"}>
            Child item that will wrap when not enough space is available
          </SideNav.Link>
          <SideNav.Link id="9" onClick={handleOnClick} active={active === "3"}>
            Child Item 3
          </SideNav.Link>
        </SideNav.Collapsible>
      </SideNav.Group>
    </SideNav>
  );
}

export default App;
