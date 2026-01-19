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
    <SideNav>
      <SideNav.Link id="1" onClick={handleOnClick} active={active === "1"}>
        Side Nav Item 1
      </SideNav.Link>
      <SideNav.Link id="2" onClick={handleOnClick} active={active === "2"}>
        Side Nav Item 2
      </SideNav.Link>
      <SideNav.Link id="3" onClick={handleOnClick} active={active === "3"}>
        Side Nav Item 3
      </SideNav.Link>
      <SideNav.Link id="4" onClick={handleOnClick} active={active === "4"}>
        Side Nav Item 4
      </SideNav.Link>
      <SideNav.Link id="5" onClick={handleOnClick} active={active === "5"}>
        Side Nav Item 5
      </SideNav.Link>
      <SideNav.Link id="6" onClick={handleOnClick} active={active === "6"}>
        Side Nav Item 6
      </SideNav.Link>
    </SideNav>
  );
}

export default App;
