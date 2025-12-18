import { Switch, Flex, Button } from "@servicetitan/anvil2";
import { useRef } from "react";

function App() {
  const switchRef = useRef<HTMLInputElement>(null);

  return (
    <Flex gap={4} justifyContent="space-around">
      <Switch
        ref={switchRef}
        defaultChecked={false}
        label="Switch"
        value="switch-example"
      />
      <Button
        onClick={() => {
          if (switchRef.current != null) {
            switchRef.current.checked = !switchRef.current.checked;
          }
        }}
      >
        Toggle Switch
      </Button>
    </Flex>
  );
}

export default App;
