import { Details, type DetailsProps } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState<string | undefined>("2");
  const expandDetails = (id: DetailsProps["id"]) => {
    setExpanded((prev) => (prev === id ? undefined : id));
  };

  return (
    <div style={{ maxWidth: "23rem" }}>
      <Details
        id="1"
        expanded={expanded === "1"}
        onClick={() => expandDetails("1")}
      >
        <Details.Summary>One open at a time Details</Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
      <Details
        id="2"
        expanded={expanded === "2"}
        onClick={() => expandDetails("2")}
      >
        <Details.Summary>One open at a time Details</Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
      <Details
        id="3"
        expanded={expanded === "3"}
        onClick={() => expandDetails("3")}
      >
        <Details.Summary>One open at a time Details</Details.Summary>
        <Details.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Details.Content>
      </Details>
    </div>
  );
}

export default App;
