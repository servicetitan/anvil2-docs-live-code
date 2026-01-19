import { SideNav, type SideNavLinkProps } from "@servicetitan/anvil2";
import { useState, type MouseEvent } from "react";

function App() {
  const [active, setActive] = useState("1");
  const handleOnClick = (
    _e: MouseEvent<HTMLAnchorElement>,
    id: SideNavLinkProps["id"],
  ) => {
    setActive(id);
  };

  return (
    <SideNav aria-label="Side Nav Title">
      <SideNav.Collapsible defaultExpanded label="Components">
        <SideNav.Link id="1" onClick={handleOnClick} active={active === "1"}>
          Overview
        </SideNav.Link>
        <SideNav.Link id="2" onClick={handleOnClick} active={active === "2"}>
          Button
        </SideNav.Link>
        <SideNav.Link id="3" onClick={handleOnClick} active={active === "3"}>
          Link
        </SideNav.Link>
      </SideNav.Collapsible>
    </SideNav>
  );
}

export default App;
