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
    <SideNav aria-label="Side Nav Title">
      <SideNav.Collapsible defaultExpanded label="Parent Item 1">
        <SideNav.Link id="1" onClick={handleOnClick} active={active === "1"}>
          Child Item 1
        </SideNav.Link>
        <SideNav.Link id="2" onClick={handleOnClick} active={active === "2"}>
          Child Item 2
        </SideNav.Link>
        <SideNav.Link id="3" onClick={handleOnClick} active={active === "3"}>
          Child Item 3
        </SideNav.Link>
      </SideNav.Collapsible>

      <SideNav.Collapsible label="Parent Item 2">
        <SideNav.Link id="4" onClick={handleOnClick} active={active === "4"}>
          Child Item 1
        </SideNav.Link>
        <SideNav.Link id="5" onClick={handleOnClick} active={active === "5"}>
          Child Item 2
        </SideNav.Link>
        <SideNav.Link id="6" onClick={handleOnClick} active={active === "6"}>
          Child Item 3
        </SideNav.Link>
      </SideNav.Collapsible>

      <SideNav.Collapsible defaultExpanded label="Parent Item 3">
        <SideNav.Link id="7" onClick={handleOnClick} active={active === "7"}>
          Child Item 1
        </SideNav.Link>
        <SideNav.Link id="8" onClick={handleOnClick} active={active === "8"}>
          Child Item 2
        </SideNav.Link>
        <SideNav.Link id="9" onClick={handleOnClick} active={active === "9"}>
          Child Item 3
        </SideNav.Link>
      </SideNav.Collapsible>
    </SideNav>
  );
}

export default App;
