import { Details, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Flex justifyContent="space-between">
      <Button onClick={toggleExpanded}>Toggle expanded</Button>
      <Details expanded={expanded} onClick={toggleExpanded}>
        <Details.Summary>Click to see details</Details.Summary>
        <Details.Content>Lorem ipsum dolor sit amet.</Details.Content>
      </Details>
    </Flex>
  );
}

export default App;
