import { Details, type DetailsProps } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState<string>();
  const expandDetails = (id: DetailsProps["id"]) => {
    setExpanded((prev) => (prev === id ? undefined : id));
  };

  return (
    <>
      <Details
        id="1"
        expanded={expanded === "1"}
        onClick={() => expandDetails("1")}
      >
        <Details.Summary>Click to see details</Details.Summary>
        <Details.Content>And the others disappear!</Details.Content>
      </Details>
      <Details
        id="2"
        expanded={expanded === "2"}
        onClick={() => expandDetails("2")}
      >
        <Details.Summary>Click to see details</Details.Summary>
        <Details.Content>And the others disappear!</Details.Content>
      </Details>
      <Details
        id="3"
        expanded={expanded === "3"}
        onClick={() => expandDetails("3")}
      >
        <Details.Summary>Click to see details</Details.Summary>
        <Details.Content>And the others disappear!</Details.Content>
      </Details>
    </>
  );
}

export default App;
