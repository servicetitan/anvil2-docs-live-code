import { Button } from "@servicetitan/anvil2";
import Star from "@servicetitan/anvil2/assets/icons/material/round/star.svg";

function App() {
  return (
    <Button
      appearance="primary"
      size="medium"
      icon={Star}
      onClick={console.log}
    >
      Click me
    </Button>
  );
}

export default App;
