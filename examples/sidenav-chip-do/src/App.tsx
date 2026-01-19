import {
  SideNav,
  Flex,
  Chip,
  type SideNavLinkProps,
} from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
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
        <Flex
          gap={2}
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          Side Nav Item
          <Chip label="55" size="small" />
        </Flex>
      </SideNav.Link>
      <SideNav.Link id="2" onClick={handleOnClick} active={active === "2"}>
        Side Nav Item
      </SideNav.Link>
      <SideNav.Link id="3" onClick={handleOnClick} active={active === "3"}>
        <Flex
          gap={2}
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          Side Nav Item
          <Chip
            label="Beta"
            size="small"
            color={core?.primitive?.ColorPurple100.value}
          />
        </Flex>
      </SideNav.Link>
      <SideNav.Link id="4" onClick={handleOnClick} active={active === "4"}>
        Side Nav Item
      </SideNav.Link>
      <SideNav.Link id="5" onClick={handleOnClick} active={active === "5"}>
        Side Nav Item
      </SideNav.Link>
    </SideNav>
  );
}

export default App;
