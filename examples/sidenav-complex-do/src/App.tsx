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
      <SideNav.Group label="Food">
        <SideNav.Collapsible defaultExpanded label="Fruits">
          <SideNav.Link id="1" onClick={handleOnClick} active={active === "1"}>
            Apple
          </SideNav.Link>
          <SideNav.Link id="2" onClick={handleOnClick} active={active === "2"}>
            Bananna
          </SideNav.Link>
          <SideNav.Link id="3" onClick={handleOnClick} active={active === "3"}>
            Orange
          </SideNav.Link>
        </SideNav.Collapsible>
        <SideNav.Collapsible
          defaultExpanded
          label="Vegetables"
        ></SideNav.Collapsible>
      </SideNav.Group>

      <SideNav.Group label="Kitchenware">
        <SideNav.Collapsible
          defaultExpanded
          label="Cutlery"
        ></SideNav.Collapsible>
        <SideNav.Collapsible
          defaultExpanded
          label="Dinnerware"
        ></SideNav.Collapsible>
      </SideNav.Group>
    </SideNav>
  );
}

export default App;
