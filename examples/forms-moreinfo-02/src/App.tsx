import { Flex, Checkbox, Tooltip, Icon } from "@servicetitan/anvil2";
import Info from "@servicetitan/anvil2/assets/icons/material/round/info.svg";
import { useState } from "react";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Flex gap="1">
      <Checkbox
        id="cb3"
        label="Academy company admin"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Tooltip
        open={isFocused}
        placement="right"
        fallbackPlacements={["bottom"]}
      >
        <Tooltip.Trigger style={{ alignSelf: "center" }}>
          {/* Don't need Icon to be focusable because Checkbox focus triggers it already */}
          <Icon
            svg={Info}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
          />
        </Tooltip.Trigger>
        <Tooltip.Content>
          Can assign courses to employees, track Academy progress, and run
          reports
        </Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
